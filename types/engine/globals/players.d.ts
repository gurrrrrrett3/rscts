/**
 * Library for managing Player objects.
 * @noSelf
 */
declare interface players {
  get: LuaTableGetMethod<number, Player>;
  set: LuaTableSetMethod<number, Player>;

  /**
   * Get all players.
   * @returns A list of all Player objects.
   */
  getAll(): Player[];

  /**
   * Get the number of players.
   * @returns How many Player objects there are.
   */
  getCount(): number;

  /**
   * Find an Player by phone number.
   * @param phoneNumber The phone identifier to search for.
   * @returns The found player, or null
   */
  getByPhone(phoneNumber: string): Player | null;

  /**
   * Get all players, excluding bots.
   * @returns A list of all Player objects, excluding bots.
   */
  getNonBots(): Player[];

  /**
   * Get all players that are bots.
   * @returns A list of all Player objects that are bots.
   */
  getBots(): Player[];

  /**
   * Create a new bot player.
   * @returns The created bot player, or null on failure.
   */
  createBot(): Player | null;
}

declare const players: players;
