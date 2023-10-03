/**
 * Represents an intersection of one or more streets.
 */
declare interface StreetIntersection {

    readonly class: "StreetIntersection";

    /**
     * The centre point of the intersection.
     */
    pos: VectorObject 
    /**
     * A number used internally by the traffic AI, which changes when the timer resets.
     */
    lightsState: number 
    /**
     *  A timer used internally by the traffic AI, which increments every tick until it reaches lightsTimerMax.
     */
    lightsTimer: number
    /**
     * The maximum value of the traffic timer before it resets.
     */
    lightsTimerMax: number 
    /**
     * The colour of the east light. 0 = red, 1 = yellow, 2 = green.
     */
    lightEast: LightState 
    /**
     * The colour of the south light. 0 = red, 1 = yellow, 2 = green.
     */
    lightSouth: LightState 
    /**
     * The colour of the west light. 0 = red, 1 = yellow, 2 = green.
     */
    lightWest: LightState 
    /**
     * The colour of the north light. 0 = red, 1 = yellow, 2 = green.
     */
    lightNorth: LightState 
    /**
     * The index of the array in memory this is.
     */
    readonly index: number 
    /**
     * The street connected to the east, if any.
     */
    readonly streetEast: Street 
    /**
     * The street connected to the south, if any.
     */
    readonly streetSouth: Street  
    /**
     *  The street connected to the west, if any.
     */
    readonly streetWest: Street
    /**
     * The street connected to the north, if any.
     */
    readonly streetNorth: Street 
}