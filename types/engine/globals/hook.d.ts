/**
 * Internal hook class, from RosaServer. Do not use.
 * @private
 */
declare class rs_hook {
  public static persistantMode: string;

  /**
   * Enable a hook for use in Lua.
   * @param eventName The name of the event to be enabled.
   * @returns Whether the event exists.
   */
  public static enable(eventName: string): boolean;

  /**
   * Disable a hook for use in Lua.
   * @param eventName The name of the event to be disabled.
   * @returns Whether the event exists.
   */
  public static disable(eventName: string): boolean;

  /**
   * Disable every hook for use in Lua, until they are enabled again.
   */
  public static clear(): void;

  /**
   * Recreate the Lua state completely at the start of the next logic tick.
   * Runs lua/main.lua again after reset.
   * @param mode The string to set to hook.persistentMode in the new state.
   */
  public static flagStateForReset(mode: string): void;
}
