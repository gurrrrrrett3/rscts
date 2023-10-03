declare interface TrafficCar {
  /**
   *
   */
  readonly class: "TrafficCar";
  /**
   * The index of the array in memory this is.
   */
  readonly index: number;
  /**
   * The type of the car.
   */
  type: VehicleType;
  /**
   * The human driving the car.
   */
  human: Human;
  /**
   *
   */
  isBot: boolean;
  /**
   *
   */
  isAggressive: boolean;
  /**
   * The real vehicle used by the car.
   */
  vehicle: Vehicle;
  /**
   * Position.
   */
  pos: VectorObject;
  /**
   * Velocity.
   */
  vel: VectorObject;
  /**
   * Radians.
   */
  yaw: number;
  /**
   *  Rotation.
   */
  rot: RotMatrixObject;
  /**
   * The color of the car.
   */
  color: number;
  /**
   *
   */
  state: number;
}
