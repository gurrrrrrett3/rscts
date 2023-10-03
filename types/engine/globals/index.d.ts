/**
 * Indicates a call when the server first starts up.
 */
declare const RESET_REASON_BOOT = 0;
/**
 * Indicates a call by the engine, usually when the round/day resets in default game modes.
 */
declare const RESET_REASON_ENGINECALL = 1;
/**
 * Indicates a call after the Lua state was manually reset.
 */
declare const RESET_REASON_LUARESET = 2;
/**
 * Indicates a call from Server:reset.
 */
declare const RESET_REASON_LUACALL = 3;

/**
 * In round-based modes, the player list screen is shown in this state to those who aren't spawned in.
 */
declare const STATE_PREGAME = 1;
/**
 * Game is ongoing. In round-based modes, players not spawned in will spectate. World players can spawn as they please.
 */
declare const STATE_GAME = 2;
/**
 * Used in round-based modes when the game is over and the player list is shown before reset.
 */
declare const STATE_RESTARTING = 3;

/**
 * Driving mode.
 * @deprecated
 */
declare const TYPE_DRIVING = 1;
/**
 * Racing mode.
 * @deprecated
 */
declare const TYPE_RACE = 2;
/**
 * Round mode.
 */
declare const TYPE_ROUND = 3;
/**
 * World mode.
 */
declare const TYPE_WORLD = 4;
/**
 * Eliminator mode.
 */
declare const TYPE_ELIMINATOR = 5;
/**
 * Co-op mode.
 */
declare const TYPE_COOP = 6;
/**
 * Versus mode.
 */
declare const TYPE_VERSUS = 7;

/**
 * File was accessed.
 */
declare const FILE_WATCH_ACCESS = 0;
/**
 * Metadata changed.
 */
declare const FILE_WATCH_ATTRIB = 0;
/**
 * Writable file was closed.
 */
declare const FILE_WATCH_CLOSE_WRITE = 0;
/**
 * Unwritable file closed.
 */
declare const FILE_WATCH_CLOSE_NOWRITE = 0;
/**
 * Subfile was created.
 */
declare const FILE_WATCH_CREATE = 0;
/**
 * Subfile was deleted.
 */
declare const FILE_WATCH_DELETE = 0;
/**
 * Self was deleted.
 */
declare const FILE_WATCH_DELETE_SELF = 0;
/**
 * File was modified.
 */
declare const FILE_WATCH_MODIFY = 0;
/**
 * Self was moved.
 */
declare const FILE_WATCH_MOVE_SELF = 0;
/**
 * File was moved from X.
 */

declare const FILE_WATCH_MOVED_FROM = 0;
/**
 * File was moved to Y.
 */
declare const FILE_WATCH_MOVED_TO = 0;
/**
 * File was opened.
 */
declare const FILE_WATCH_OPEN = 0;
/**
 * Moves.
 */
declare const FILE_WATCH_MOVE = 0;
/**
 * Closes.
 */
declare const FILE_WATCH_CLOSE = 0;
/**
 * Do not follow a sym link.
 */
declare const FILE_WATCH_DONT_FOLLOW = 0;
/**
 * Exclude events on unlinked objects.
 */
declare const FILE_WATCH_EXCL_UNLINK = 0;
/**
 * Add to the mask of an already existing watch.
 */
declare const FILE_WATCH_MASK_ADD = 0;
/**
 * Only send event once.
 */
declare const FILE_WATCH_ONESHOT = 0;
/**
 * Only watch the path if it is a directory.
 */
declare const FILE_WATCH_ONLYDIR = 0;
/**
 * File was ignored.
 */
declare const FILE_WATCH_IGNORED = 0;
/**
 * Event occurred against a directory.
 */
declare const FILE_WATCH_ISDIR = 0;
/**
 * Event queue overflowed.
 */
declare const FILE_WATCH_Q_OVERFLOW = 0;
/**
 * Backing fs was unmounted.
 */
declare const FILE_WATCH_UNMOUNT = 0;

/**
 * Send a message to the main thread.
 * Only available in worker threads.
 * Adds to a queue such that when receiveMessage is called on the worker object in the main thread, this message can be returned.
 * @param message The message to send.
 * @see LuaWorker#receiveMessage
 */
declare function sendMessage(message: any): void;

/**
 * Receive a message from the main thread.
 * Only available in worker threads.
 * @returns The message sent by sendMessage.
 * @see LuaWorker#sendMessage
 */
declare function receiveMessage(): any;

/**
 * Suspend this thread for a number of milliseconds.
 * Only available in worker threads.
 * @param ms The number of milliseconds to sleep for.
 * @return  Whether the main thread has destroyed the Worker object responsible for this thread while it was sleeping. If true, execution of this thread has to finish.
 */
declare function sleep(ms: number): boolean;

