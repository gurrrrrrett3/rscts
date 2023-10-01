declare interface LineIntersectResult {
  /**
   * Whether it hit. If false, all other fields will be undefined.
   */
  hit: boolean;
  /**
   * The global position where the ray hit.
   */
  pos?: VectorObject;
  /**
   * The normal of the surface the ray hit.
   */
  normal?: VectorObject;
  /**
   * How far along the ray the hit was (0.0 - 1.0).
   */
  fraction?: number;
  /**
   * Which bone the ray hit, if it was cast on a human.
   */
  bone?: number;
  /**
   * Which face the ray hit, if not a wheel, if it was cast on a vehicle.
   */
  face?: number;
  /**
   * Which wheel the ray hit, if not a face, if it was cast on a vehicle.
   */
  wheel?: number;
}
