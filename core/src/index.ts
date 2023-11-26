import fs from "fs";
import path from "path";
import GlobalLogger from "./util/logger";
import { transpileProject} from "typescript-to-lua";
import formatEmitErrors from "./util/formatEmitError";
import { spawn } from "child_process";
import { WriteFileCallback } from "typescript"

if (fs.existsSync(path.resolve("./core/compiled"))) {
    fs.rmSync(path.resolve("./core/compiled"), { recursive: true });
}

const wfcb: WriteFileCallback = (fileName, data, writeByteOrderMark, onError, sourceFiles) => {
    const filePath = path.resolve(fileName);
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // fix require paths (x.y.z -> compiled.x.y.z)
    data = data.replace(/require\("([a-zA-Z0-9_\.\/]+)"\)/g, (match, p1) => {
        return `require("compiled.${p1}")`
    });

    fs.writeFileSync(filePath, data, { encoding: "utf-8" });
}

GlobalLogger.info("Core", "Running Compile...")

const res = transpileProject(path.resolve("./core/tsconfig.lua.json"), undefined, wfcb)


if (res.diagnostics.length > 0) {
    formatEmitErrors(res.diagnostics).forEach(diagnostic => {
        console.log(diagnostic);
    })
   
    GlobalLogger.error("Core", "Compile Failed. Check above for errors.")
    process.exit(1);
}

GlobalLogger.info("Core", "Compile Finished!")

// create symlink to config file
if (!fs.existsSync(path.resolve("./core/config.yml"))) {
    fs.symlinkSync(path.resolve("./config.yml"), path.resolve("./core/config.yml"));
}

// create file watcher for all source files
const watchers: fs.FSWatcher[] = [];

const watchDir = (dir: string) => {
    const watcher = fs.watch(dir, { recursive: true }, (event, filename) => {
        if (filename?.endsWith(".ts")) {
            GlobalLogger.info("Core", `Detected change in ${filename}. Recompiling...`);
            watcher.close();
            watchDir(dir);
            transpileProject(path.resolve("./core/tsconfig.lua.json"), undefined, wfcb)
        }
    });
    watchers.push(watcher);
}

watchDir(path.resolve("./src"));

GlobalLogger.info("Core", "Starting Server...")
const serverProcess = spawn(`${path.resolve("./core/subrosadedicated.x64")}`, {
    env: {
        "LD_PRELOAD": `${path.resolve("./core/libluajit.so")} ${path.resolve("./core/librosaserver.so")}`
    },
    stdio: "inherit",
    cwd: path.resolve("./core")
});

serverProcess.on("exit", (code) => {
    GlobalLogger.info("Core", `Server exited with code ${code}`);
    process.exit(code || 0);
});

process.on("SIGINT", () => {
    serverProcess.kill("SIGINT");
    process.exit(0);
});

process.on("SIGTERM", () => {
    serverProcess.kill("SIGTERM");
    process.exit(0);
});

process.on("beforeExit", () => {
    serverProcess.kill("SIGINT");
    process.exit(0);
})

process.on("exit", () => {
    serverProcess.kill("SIGINT");
    process.exit(0);
})

process.on("uncaughtException", (err) => {
    GlobalLogger.error("Core", "Uncaught Exception: " + err.stack);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    GlobalLogger.error("Core", "Unhandled Rejection: " + ((err as any).stack || err));
    process.exit(1);
});

