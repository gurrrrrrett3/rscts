/**
 * Library for managing Item objects.
 */
declare interface items {
  get: LuaTableGetMethod<number, Item>;
  set: LuaTableSetMethod<number, Item>;

  /**
   * Get all items.
   * @returns A list of all Item objects.
   */
  getAll(): Item[];

  /**
   * Get the number of items.
   * @returns How many Item objects there are.
   */
  getCount(): number;

  /**
   * Create a new item.
   * @param type The type of the new item.
   * @param position The position of the new item.
   * @param rotation The rotation of the new item.
   * @returns The created item, or null on failure.
   */
  create(type: ItemType, position: VectorObject, rotation: RotMatrixObject): Item | null;
  /**
   * Create a new item.
   * @param type The type of the new item.
   * @param position The position of the new item.
   * @param rotation The rotation of the new item.
   * @param velocity The velocity of the new item.
   * @returns The created item, or null on failure.
   */
  create(
    type: ItemType,
    position: VectorObject,
    velocity: VectorObject,
    rotation: RotMatrixObject
  ): Item | null;

  /**
   * Create a floppy rope consisting of many items.
   * @param position The position of the new rope. Seems to be offset.
   * @param rotation The rotation of the new rope.
   * @returns The created item, or null on failure.
   * @deprecated
   */
  createRope(position: VectorObject, rotation: RotMatrixObject): Item | null;
}

declare const items: items;
