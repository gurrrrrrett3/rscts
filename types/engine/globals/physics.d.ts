/**
 * Library for using generic physics functions of the engine.
 */
declare class physics {
    /**
     * Cast a ray in the level and find where it hits.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param onlyCity boolean Whether to only include the city (not landscape, tracks, etc).
     * @return LineIntersectResult result The result of the intersection.
     */
    static lineIntersectLevel(
      posA: VectorObject,
      posB: VectorObject
    ): LineIntersectResult;
    /**
     * Cast a ray on a single human.
     * @param human Human The human to cast the ray on.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param padding number The extra padding.
     * @return LineIntersectResult result The result of the intersection.
     */
    static lineIntersectHuman(
      vehicle: Vehicle,
      posA: VectorObject,
      posB: VectorObject,
      padding: number
    ): LineIntersectResult;
    /**
     * Cast a ray on a single vehicle.
     * @param vehicle Vehicle The vehicle to cast the ray on.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param includeWheels boolean Whether to include wheels.
     * @return LineIntersectResult result The result of the intersection.
     */
    static lineIntersectVehicle(
      vehicle: Vehicle,
      posA: VectorObject,
      posB: VectorObject,
      includeWheels: boolean
    ): LineIntersectResult;
    /**
     * Cast a quick ray in the level and find how far along the ray it went.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param onlyCity boolean Whether to only include the city (not landscape, tracks, etc).
     * @return number? fraction The fraction of the intersection.
     */
    static lineIntersectLevelQuick(
      posA: VectorObject,
      posB: VectorObject,
      onlyCity: boolean
    ): number | undefined;
    /**
     * Cast a quick ray on a single human.
     * @param human Human The human to cast the ray on.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param padding number The extra padding.
     * @return number? fraction The fraction of the intersection.
     */
    static lineIntersectHumanQuick(
      human: Human,
      posA: VectorObject,
      posB: VectorObject,
      padding: number
    ): number | undefined;
    /**
     * Cast a quick ray on a single vehicle.
     * @param vehicle Vehicle The vehicle to cast the ray on.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param includeWheels boolean Whether to include wheels.
     * @return number? fraction The fraction of the intersection.
     */
    static lineIntersectVehicleQuick(
      vehicle: Vehicle,
      posA: VectorObject,
      posB: VectorObject,
      includeWheels: boolean
    ): number | undefined;
    /**
     * Cast a quick ray on any human or vehicle.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param ignoreHuman Human|nil The human to ignore during raycast.
     * @param humanPadding number The extra padding applied to humans.
     * @param includeWheels boolean Whether to include vehicles' wheels.
     * @return Human|Vehicle? object The nearest human or vehicle that the ray hit, or nil if it hit the level or nothing.
     * @return number? fraction The fraction of the intersection.
     * @tupleReturn
     */
    static lineIntersectAnyQuick(
      posA: VectorObject,
      posB: VectorObject,
      ignoreHuman: boolean | undefined,
      humanPadding: number,
      includeWheels: boolean
    ): [Human | Vehicle | undefined, number | undefined];
    /**
     * Cast a ray on an arbitrary triangle.
     * The vertices of the triangle must be clockwise relative to the normal.
     * The vector passed to outPosition will be modified by the function.
     * @param outPosition Vector A vector whose values will be set to the position the ray hit.
     * @param normal Vector The normal of the triangle.
     * @param posA Vector The start point of the ray.
     * @param posB Vector The end point of the ray.
     * @param triA Vector The first vertex of the triangle.
     * @param triB Vector The second vertex of the triangle.
     * @param triC Vector The third vertex of the triangle.
     * @return number? fraction How far along the ray hit was (0.0 - 1.0). Nil if it did not hit.
     */
    static lineIntersectTriangle(
      outPosition: VectorObject,
      normal: VectorObject,
      posA: VectorObject,
      posB: VectorObject,
      triA: VectorObject,
      triB: VectorObject,
      triC: VectorObject
    ): number | undefined;
    /**
     * Remove all bullets that have no time remaining.
     * May shift bullets in memory if any are removed.
     */
    static garbageCollectBullets();
    /**
     * Create a collidable block in the level.
     * @param blockX integer
     * @param blockY integer
     * @param blockZ integer
     * @param flags integer
     */
    static createBlock(
      blockX: number,
      blockY: number,
      blockZ: number,
      flags: number
    );
    /**
     * Delete a collidable block in the level.
     * @param blockX integer
     * @param blockY integer
     * @param blockZ integer
     */
    static deleteBlock(blockX: number, blockY: number, blockZ: number);
  }