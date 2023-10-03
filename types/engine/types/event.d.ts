/**
 * Represents an occurrence that is synchronized to all connections.
 */
declare interface LuaEvent {
    readonly class: "Event";

    /**
     * The index of the array in memory this is.
     */
    readonly index: number
    /**
     *  The type of the event. Different types use different data fields.
     */
    type: number
    /**
     * The number of ticks since the last game reset at which the event was created.
     */
    tickCreated: number 
    /**
     * 
     */
    vectorA: VectorObject
    /**
     * 
     */
    vectorB: VectorObject
    /**
     * 
     */
    a: number
    /**
     * 
     */
    b: number
    /**
     * 
     */
    c: number
    /**
     * 
     */
    d: number
    /**
     * 
     */
    floatA: number
    /**
     * 
     */
    floatB: number
    /**
     * Max length of 63.
     */
    message: string 
    }