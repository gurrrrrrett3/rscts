/**
 * Represents a bond between one or two rigid bodies.
 */
declare interface Bond {
  /**
   *
   */
  readonly class: "Bond";
  /**
   *
   */
  type: number;
  /**
   * How many ticks until removal, 65536 for never.
   */
  despawnTime: number;
  /**
   *
   */
  globalPos: VectorObject;
  /**
   *
   */
  localPos: VectorObject;
  /**
   *
   */
  otherLocalPos: VectorObject;
  /**
   * The index of the array in memory this is (0-16383).
   */
  readonly index: number;
  /**
   * Whether or not this exists, only change if you know what you are doing.
   */
  isActive: boolean;
  /**
   * The rigid body of this bond.
   */
  body: RigidBody;
  /**
   * The second rigid body of this bond, if there is one.
   */
  otherBody: RigidBody;
}
