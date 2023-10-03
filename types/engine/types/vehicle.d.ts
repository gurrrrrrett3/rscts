/**
 * Represents a car, train, or helicopter.
 * 💾 = To network changed value to clients, the `updateType` method needs to be called.
 */
declare interface Vehicle {
    readonly class: "Vehicle";
    /**
     * A Lua table which persists throughout the lifespan of this object.
     */
    data: Data

    /**
     *  0 = cannot be controlled, 1 = car, 2 = helicopter.
     */
	type: VehicleType

    /**
     * Whether or not this has a key and is locked.
     */
	isLocked: boolean
    
    /**
     *  0 = cannot be controlled, 1 = car, 2 = helicopter.
     */
	controllableState: number
    /**
     * 0-100
     */
	health: number
    /**
     * 💾 0 = black, 1 = red, 2 = blue, 3 = silver, 4 = white, 5 = gold.
     */
	color: number

    /**
     * Position.
     */
	pos: VectorObject

    /**
     * Velocity.
     */
	vel: VectorObject

    /**
     * Rotation.
     */
	rot: RotMatrixObject

    /**
     * Left to right stick shift position, 0 to 2.
     */
	gearX: number

    /**
     * Forward to back stick shift position, -1 to 1.
     */
	gearY: number 

    /**
     * Left to right wheel position, -0.75 to 0.75.
     */
	steerControl: number

    /**
     * Brakes to full gas, -1 to 1.
     */
	gasControl: number

    /**
     * The RPM of the engine to be networked, 0 to 8191.
     */
	engineRPM: number

    /**
     * The number of accessible seats.
     */
	numSeats: number 

    /**
     * 🔒 The index of the array in memory this is (0-511).
     */
	readonly index: number 

    /**
     * Whether or not this exists, only change if you know what you are doing.
     */
	isActive: boolean

    /**
     * 🔒 The last person to drive the vehicle.
     */
	readonly lastDriver: Player 

    /**
     * 🔒 The rigid body representing the physics of this vehicle.
     */
	readonly rigidBody: RigidBody 

    /**
     * The traffic car the vehicle belongs to.
     */
	trafficCar: TrafficCar

    /**
     * Fire a network event containing basic info.
	 * @return Event event The created event.
     */
    updateType(): Event;

    /**
     * Fire a network event to make a part appear to break.
     * Also used to visually toggle train doors.
	 * @param kind integer The kind of part. 0 = window, 1 = tire, 2 = entire body, 6 = repair window.
	 * @param position The global position of the destruction.
	 * @param normal The normal of the destruction.
	 * @return event The created event.
     */
    updateDestruction(kind: number, partIndex: number, position: VectorObject, normal : VectorObject): Event;
    
    /**
     * Remove self safely and fire a network event.
     */
    remove() : void;

    /**
     * Get whether a specific window is broken.
	 * @param index The index between 0 and 7.
	 * @return isWindowBroken
     */
    getIsWindowBroken(index: number): boolean;

    /**
     * Set whether a specific window is broken.
	 * @param index integer The index between 0 and 7.
	 * @param isWindowBroken boolean
     */
    setIsWindowBroken(index: number, isWindowBroken: boolean): void;

}

declare var Vehicle: Vehicle;