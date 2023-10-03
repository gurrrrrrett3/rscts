/**
 * Represents a lane on a street.
 */
declare interface StreetLane {
  readonly class: "StreetLane";

  /**
   * The direction of the lane, either 0 or 1.
   */
  direction: StreetDirection;

  /**
   * The first point in the lane path.
   */
  posA: VectorObject;

  /**
   * The second point in the lane path.
   */
  posB: VectorObject;
}
