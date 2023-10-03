/**
 * Library for sending chat messages.
 */
declare class chat {
    
    /**
     * Display a message in the chat box to everybody.
     * @param message The message to send. Max length 63.
     * @returns The created event.
     */
    public static announce(message): LuaEvent

    /**
     * Display a message in the chat box only to admins.
     * More specifically, all players whose connection has `adminVisible` set to true.
     * @param message The message to send. Max length 63.
     * @returns The created event.
     */
    public static tellAdmins(message): LuaEvent
    
}