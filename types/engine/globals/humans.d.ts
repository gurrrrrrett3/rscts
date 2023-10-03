/**
 * Library for managing Human objects.
 * @noSelf
 */
declare interface humans {
  get: LuaTableGetMethod<number, Human>;
  set: LuaTableSetMethod<number, Human>;

  /**
   * Get all humans.
   * @returns A list of all Human objects.
   */
  getAll(): Human[];

  /**
   * Get the number of humans.
   * @returns How many Human objects there are.
   */
  getCount(): number;

  /**
   * Create a new bot player.
   * @param position The position of the new Human.
   * @param rotation The rotation of the new Human.
   * @param player The player whose human this will be.
   * @returns The created bot player, or null on failure.
   */
  create(position: VectorObject, rotation: RotMatrixObject, player: Player): Human | null;
}

declare const humans: humans;
