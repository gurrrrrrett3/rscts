/**
 * Represents the server; only one instance in the global variable `server`.
 */
declare interface Server {
    readonly class: "Server";
    /**
     * How many ticks are in 1 second according to in-game timers (60).
     */
    readonly TPS: 60;
    readonly port: number;
    
    /**
     * Name shown on the server list, max length of 31.
     */
    name: string;

    /**
     * The admin password used in the /admin command.
     */
    adminPassword: string;

    /**
     * Empty string for no password, otherwise people will need to type this to join.
     */
    password: string;

    maxPlayers: number;
    maxBytesPerSecond: number;
    
    /**
     * How many traffic cars there should be in world mode.
     */
    worldTraffic: number;
    worldStartCash: number;
    worldMinCash: number;
    worldShowJoinExit: boolean;
    worldRespawnTeam: boolean;
    worldCrimeCivCiv: number;
    worldCrimeCivTeam: number;
    worldCrimeTeamCiv: number;
    worldCrimeTeamTeam: number;
    worldCrimeTeamTeamInBase: number;
    worldCrimeNoSpawn: number;

    /**
     * How long rounds are in round mode, in minutes.
     */
    roundRoundTime: number;
    roundStartCash: number;
    roundIsWeekly: boolean;
    roundHasBonusRatio: boolean;
    roundTeamDamage: number;
    
    /**
     * Gamemode number.
     */
    type: number;

    /**
     * Name of the currently loaded map.
     */
    readonly loadedLevel: string;

    levelToLoad: string;
    isLevelLoaded: boolean;

    gravity: number;
    readonly defaultGravity: number;

    /**
     * Game state enum. Always networked.
     */
    state: number;

    /**
     * Time remaining in ticks (see TPS). Always networked.
     */
    time: number;

    /**
     * Time of day in ticks, where noon is 2592000 (12*60*60*TPS). Always networked.
     */
    sunTime: number;

    /**
     * Game build, ex. "36a"
     */
    readonly version: string;

    /**
     * Major version number, ex. 36
     */
    readonly versionMajor: number;

    /**
     * Minor version number, ex. 1
     */
    readonly versionMinor: number;

    /**
     * Reset the game with reason RESET_REASON_LUACALL.
     */
    reset(): void;

    /**
     * Set the title displayed on the terminal the server is running on.
     * @param title Title to set.
     */
    setConsoleTitle(title: string): void;
}   

declare var server: Server