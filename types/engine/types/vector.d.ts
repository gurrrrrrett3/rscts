/**
 * Represents a 3D point in the level.
 * Available in worker threads.
 */
declare interface VectorObject {
  class: "Vector";

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
  add(other: VectorObject): VectorObject;

  /**
   * Multiply self by scalar.
   * @param scalar Scalar to multiply by.
   */
  mult(scalar: number): VectorObject;

  /**
   * Replace values with those in another vector.
   * @param other Vector to inherit values from.
   */
  set(other: VectorObject): VectorObject;

  /**
   * Create a copy of self.
   * @returns The created copy.
   */
  clone(): VectorObject;

  /**
   * Get the distance between self and other.
   * @param other Vector to get distance to.
   * @returns The distance between self and other.
   */
  dist(other: VectorObject): number;

  /**
   * Calculate the distance between self and other, squared.
   * Much faster as it does not square root the value.
   * @param other Vector to get distance to.
   * @returns The distance between self and other, squared.
   */
  distSquare(other: VectorObject): number;

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
  dot(other: VectorObject): number;

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
  normalize(): VectorObject;
}

/**
 * Represents a 3D point in the level.
 * Available in worker threads.
 */
declare function Vector(x: number, y: number, z: number): VectorObject;
declare function Vector(): VectorObject;
