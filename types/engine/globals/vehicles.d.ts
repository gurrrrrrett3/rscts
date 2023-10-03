/**
 * Library for managing Vehicle objects.
 */
declare interface vehicles {
  get: LuaTableGetMethod<number, Vehicle>;
  set: LuaTableSetMethod<number, Vehicle>;

  /**
   * Get all vehicles.
   * @returns A list of all Vehicle objects.
   */
  getAll(): Vehicle[];

  /**
   * Get the number of vehicles.
   * @returns How many Vehicle objects there are.
   */
  getCount(): number;

  /**
   * Create a new vehicle.
   * @param type The type of the vehicle.
   * @param position The position of the vehicle.
   * @param rotation The rotation of the vehicle.
   * @param color The color of the vehicle.
   * @returns The created vehicle, or null on failure.
   */
  create(
    type: VehicleType,
    position: VectorObject,
    rotation: RotMatrixObject,
    color: VehicleColor
  ): Vehicle | null;
}

declare const vehicles: vehicles;
