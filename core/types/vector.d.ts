/**
 * Represents a 3D point in the level.
 * Available in worker threads.
 */
declare interface Vector {
  readonly class: "Vector";

  /**
   * X coordinate.
   */
  x: number;

  /**
   * Y coordinate.
   */
  y: number;

  /**
   * Z coordinate.
   */
  z: number;

  /**
   * Add other to self.
   * @param other Vector to add.
   */
  add(other: Vector): Vector;

  /**
   * Multiply self by scalar.
   * @param scalar Scalar to multiply by.
   */
  mul(scalar: number): Vector;

  /**
   * Replace values with those in another vector.
   * @param other Vector to inherit values from.
   */
  set(other: Vector): Vector;

  /**
   * Create a copy of self.
   * @returns The created copy.
   */
  clone(): Vector;

  /**
   * Get the distance between self and other.
   * @param other Vector to get distance to.
   * @returns The distance between self and other.
   */
  dist(other: Vector): number;

  /**
   * Calculate the distance between self and other, squared.
   * Much faster as it does not square root the value.
   * @param other Vector to get distance to.
   * @returns The distance between self and other, squared.
   */
  distSquare(other: Vector): number;

  /**
   * Calculate the length of the vector.
   * @returns The length of the vector.
   */
  length(): number;

  /**
   * Calculate the length of the vector, squared.
   * Much faster as it does not square root the value.
   * @returns The length of the vector, squared.
   */
  lengthSquare(): number;

  /**
   * Calculate the dot product of self and other.
   * @param other Vector to calculate dot product with.
   * @returns The dot product of self and other.
   */
  dot(other: Vector): number;

  /**
   * Get the coordinates of the level block the vector is in.
   */
  getBlockPos(): {
    x: number;
    y: number;
    z: number;
  };

  /**
   * Normalize the vector's values so that it has a length of 1.
   */
  normalize(): Vector;
}
