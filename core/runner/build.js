const { spawn } = require("child_process");
const path = require("path");

module.exports.default = (options) => {
    
    const now = new Date();

  return new Promise((resolve, reject) => {
    const child = spawn("npx", ["tsc"], {
      cwd: path.resolve(process.cwd(), "core"),
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code !== 0) {
        reject();
        return;
      }

      console.log(`Build complete in ${new Date() - now}ms`);

      resolve();
    });
  });
};
