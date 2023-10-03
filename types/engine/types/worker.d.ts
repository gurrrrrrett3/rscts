/**
 * Represents a worker thread.
 */
declare interface LuaWorker {
    readonly class: "Worker";

}

declare function LuaWorker(): LuaWorker;

