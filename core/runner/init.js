const { spawn } = require("child_process");
const path = require("path");

module.exports.default = async () => {
  
  const now = new Date();

  const install = new Promise((resolve, reject) => {
    const child = spawn("npm", ["ci"], {
      cwd: path.resolve(process.cwd(), "core"),
      stdio: "inherit",
    });

    child.on("exit", (code) => {
      if (code !== 0) {
        reject();
        return;
      }
      resolve();
    });
  });

  await install;

  setTimeout(() => {

    const build = new Promise((resolve, reject) => {
      const child = spawn("npx", ["tsc"], {
        cwd: path.resolve(process.cwd(), "core"),
        stdio: "inherit",
      });
  
      child.on("exit", (code) => {
        if (code !== 0) {
          reject();
          return;
        }
        resolve();
      });
    })

    build.then(() => {
      console.log(`Init complete in ${new Date() - now}ms`);
      return;
    }
    ).catch(() => {
      console.log("Build failed");
    })
  }, 1000);


  return;

};
