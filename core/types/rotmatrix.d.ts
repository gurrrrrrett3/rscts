/**
 * Represents the rotation of an object as a 3x3 matrix.
 * Available in worker threads.
 */
declare interface RotMatrix {
  readonly class: "RotMatrix";

  x1: number;
  y1: number;
  z1: number;
  x2: number;
  y2: number;
  z2: number;
  x3: number;
  y3: number;
  z3: number;

  /**
   * Replace values with those in another matrix.
   * @param other The matrix to inherit values from.
   */
  set(other: RotMatrix): void;

  /**
   * Create a copy of self.
   * @return RotMatrix clone The created copy.
   */
  clone(): RotMatrix;

  /**Get a normal vector pointing in the rotation's +X direction.
   * @return Vector forward The normal vector.
   */
  getForward(): Vector;

  /**
   * Get a normal vector pointing in the rotation's +Y direction.
   * @return Vector up The normal vector.
   */
  getRight(): Vector;
}

declare var RotMatrix: RotMatrix;
