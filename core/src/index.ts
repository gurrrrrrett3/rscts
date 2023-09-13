import argActions from "./argActions";

const args = process.argv.slice(2).join(" ")


// run the actions

for (const arg of Object.keys(argActions)) {
    if (args.includes(arg)) {
        (argActions as any)[arg].action();
    }
}

// init the logger

import { Logger as LoggerInstance } from "./util/logger";
export const Logger = new LoggerInstance("core");

Logger.info("Manager Initialized");
