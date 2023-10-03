/**
 * Represents a bullet currently flying through the air.
 * Bullets can be moved around in memory every tick, so don't hold onto references.
 */
declare interface Bullet {
    readonly class: "Bullet";

    type: BulletType;

    /**
     * How many ticks this bullet has left until it despawns.
     */
    time: number;

    /**
     * Where the bullet was last tick.
     */
    lastPos: VectorObject;

    /**
     * Position.
     */
    pos: VectorObject;

    /**
     * Velocity.
     */
    vel: VectorObject;

    /**
     * Who shot this bullet.
     */
    player: Player;
}

declare var Bullet: Bullet;