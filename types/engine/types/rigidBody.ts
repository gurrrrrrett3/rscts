/**
 * Represents a rigid body currently in use by the physics engine.
 */
declare interface RigidBody<D extends Data = Data> {
    readonly class: "RigidBody";

    /**
     * A Lua table which persists throughout the lifespan of this object.
     */
	data: D;

    /**
     * 0 = bone, 1 = car body, 2 = wheel, 3 = item.
     */
	type: RigidBodyType;

    /**
     * In kilograms, kind of.
     */
	mass: number;

    /**
     * Position.
     */
	pos: VectorObject;

    /**
     * Velocity.
     */
	vel: VectorObject;

    /**
     * Rotation.
     */
	rot: RotMatrixObject;

    /**
     * Rotational velocity.
     */
	rotVel: RotMatrixObject;

    /**
     * 🔒 The index of the array in memory this is (0-8191).
     */
	readonly index: number;

    /**
     * Whether or not this exists, only change if you know what you are doing.
     */
	isActive: boolean;

    /**
     * Whether this rigid body is settled by gravity.
     */
	isSettled: boolean;

    /**
     * Create a bond between this body and another at specific local coordinates.
	 * @param otherBody RigidBody The second body in the bond.
	 * @param thisLocalPos VectorObject The local position relative to this body.
	 * @param otherLocalPos VectorObject The local position relative to the other body.
	 * @return Bond? bond The created bond, if successful.
     */
    bondTo(otherBody: RigidBody, thisLocalPos : VectorObject, otherLocalPos : VectorObject): Bond;
    
    /**
     * Link rotation between this body and another.
	 * Does not seem to be very strong.
	 * @param otherBody RigidBody The second body in the bond.
	 * @return Bond? bond The created bond, if successful.
     */
    bondRotTo(otherBody: RigidBody): Bond; 

    /**
     * Bond a local coordinate of this body to a static point in space.
	 * @param localPos VectorObject The local position relative to this body.
	 * @param globalPos VectorObject The global position in the level.
	 * @return Bond? bond The created bond, if successful.
     */
    bondToLevel(localPos: VectorObject, globalPos: VectorObject): Bond; 

    /**
     * Collide with the level for one tick.
	 * @param localPos VectorObject The local position relative to this body.
	 * @param normal VectorObject The normal of the collision.
	 * @param a number
	 * @param b number
	 * @param c number
	 * @param d number
     */
    collideLevel(localPos: VectorObject, normal: VectorObject, a: number, b: number, c: number, d: number): void;
}

declare var RigidBody: RigidBody;