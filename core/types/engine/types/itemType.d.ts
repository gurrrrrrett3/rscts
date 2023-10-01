  /**
 * Represents a type of item that exists.
 */
declare interface ItemType {
  readonly class: "ItemType";

  /**
   * How much money is taken when bought. Not networked.
   */
  price: number;
  /**
   * In kilograms, kind of.
   */
  mass: number;
  /**
   * How many ticks between two shots.
   */
  fireRate: number;
  /**
   *
   */
  magazineAmmo: number;
  /**
   *
   */
  bulletType: number;
  /**
   *
   */
  bulletVelocity: number;
  /**
   *
   */
  bulletSpread: number;
  /**
   *
   */
  numHands: number;
  /**
   *
   */
  rightHandPos: VectorObject;
  /**
   *
   */
  leftHandPos: VectorObject;
  /**
   *
   */
  primaryGripStiffness: number;
  /**
   *  In radians.
   */
  primaryGripRotation: number;
  /**
   *
   */
  secondaryGripStiffness: number;
  /**
   * In radians.
   */
  secondaryGripRotation: number;
  /**
   * The offset of where the item is held if it is a gun.
   */
  gunHoldingPos: VectorObject;
  /**
   *
   */
  boundsCenter: VectorObject;
  /**
   * 🔒 The index of the array in memory this is.
   */
  readonly index: number;
  /**
   * Not networked.
   */
  name: string;
  /**
   *
   */
  isGun: boolean;
}

declare var ItemType: ItemType;
