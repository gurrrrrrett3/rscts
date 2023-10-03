/**
 * Represents an active client network connection.
 * Connections can be moved around in memory every tick, so don't hold onto references.
 */
declare interface Connection {
    readonly class: "Connection";

    port: number;

    /**
     * How many ticks the connection has not responded, will be deleted after 30 seconds.
     */
	timeoutTime: number;

    /**
     * 🔒 IPv4 address ("x.x.x.x")
     */
	readonly address: string;

    /**
     * Whether this connection is sent admin only events (admin messages).
     */
	adminVisible: boolean;

    /**
     * The connected player.
     */
	player: Player;

    /**
     * The human this connection is currently spectating, if any.
     */
	spectatingHuman: Human;

    getEarShot(index: number) : EarShot;

    hasReceivedEvent(event: Event) : boolean;
}

declare var Connection: Connection;