const args = process.argv.slice(2);

const actions = {
  init: require("./init"),
  build: require("./build"),
  start: require("./start"),
  debug: require("./debug"),
};

const action = args[0];
const actionArgs = args.slice(1);

if (!actions[action]) {
  console.log(`Unknown action: ${action}`);
  process.exit(1);
}

actions[action].default(actionArgs);
