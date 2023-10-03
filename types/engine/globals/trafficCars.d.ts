/**
 * Library for managing TrafficCar objects.
 */
declare interface trafficCars {
  get: LuaTableGetMethod<number, TrafficCar>;
  set: LuaTableSetMethod<number, TrafficCar>;

  /**
   * Get all trafficcars.
   * @returns A list of all TrafficCar objects.
   */
  getAll(): TrafficCar[];

  /**
   * Get the number of trafficcars.
   * @returns How many TrafficCar objects there are.
   */
  getCount(): number;

  /**
   * Randomly create some traffic cars.
   * @param amount The number of cars to create.
   */
  createMany(amount: number): void;
}

declare const trafficCars: trafficCars;
