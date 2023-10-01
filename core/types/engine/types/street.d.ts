/**
 * Represents a street.
 */
declare interface Street {
    readonly class: "Street";

    /**
     * The first corner of a cuboid, where points inside are considered to be on the street by traffic AI.
     */
	trafficCuboidA: VectorObject;

    /**
     * The second corner of a cuboid, where points inside are considered to be on the street by traffic AI.
     */
	trafficCuboidB: VectorObject;

    /**
     * How many AI vehicles are currently on the street.
     */
	numTraffic: number;

    /**
     * 🔒 The index of the array in memory this is.
     */
	readonly index: number;

    /**
     * 🔒 The name of the street, ex. "First Street"
     */
	readonly name: string;

    /**
     * 🔒 The intersection that the street starts at.
     */
	readonly intersectionA: StreetIntersection;

    /**
     * 🔒 The intersection that the street ends at.
     */
	readonly intersectionB: StreetIntersection;

    /**
     * 🔒 How many lanes the street has.
     */
	readonly numLanes: number;

    /**
     * Get a lane on the street.
	 * @param index integer The index between 0 and numLanes-1.
	 * @return StreetLane lane The desired lane.
     */
    getLane(index: number): StreetLane;
}

declare var Street: Street;