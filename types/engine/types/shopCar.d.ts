/**
 * Represents a car for sale at a car shop.
 */
declare interface ShopCar {
  /**
   *
   */
  readonly class: "ShopCar";
  /**
   * How much money is taken when bought. Note that if the key is sold, the price of the VehicleType is used for refunds.
   */
  price: number;
  /**
   * The color of the car.
   */
  color: VehicleColor;
  /**
   * The type of the car.
   */
  type: VehicleType;
}
