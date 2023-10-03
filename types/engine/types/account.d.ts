/**
 * Represents a persistent player account stored on the server.
 */
declare interface Account {
    readonly class: "Account";

    /**
     *  A Lua table which persists throughout the duration of the server.
     */
    data: Data;

    /**
     * Unique account index given by the master server, should not be used.
     */
    subRosaID: number;

    /**
     * Unique public ID tied to the account, ex. 2560001
     */
    phoneNumber: number;
    money: number;
    corporateRating: number;
    criminalRating: number;

    /**
     * How long this person has to wait to spawn in, in seconds.
     */
    spawnTimer: number;

    /**
     * How many world mode minutes this person has played for.
     */
    playTime: number;

    /**
     * Remaining ban time in minutes.
     */
    banTime: number;

    /**
     * 🔒 The index of the array in memory this is (0-255).
     */
    readonly index: number;

    /**
     * 🔒 Last known player name.
     */
    readonly name: string;

    /**
     * 🔒 SteamID64
     */
    readonly steamID: string;
}

declare var Account: Account;