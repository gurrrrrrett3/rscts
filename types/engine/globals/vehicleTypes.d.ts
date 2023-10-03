/**
 * Library for managing VehicleType objects.
 */
declare interface vehicleTypes {
  get: LuaTableGetMethod<number, VehicleType>;
  set: LuaTableSetMethod<number, VehicleType>;

  /**
   * Get all vehicle types.
   * @returns A list of all VehicleType objects.
   */
  getAll(): VehicleType[];

  /**
   * Get the number of vehicle types.
   * @returns How many VehicleType objects there are.
   */
  getCount(): number;

  /**
   * Find an vehicle type by name.
   * @param name The name to search for.
   * @returns The found vehicle type, or null
   */
  getByName(name: VehicleName): VehicleType | null;
}

declare const vehicleTypes: vehicleTypes;
