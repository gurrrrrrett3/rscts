/**
 * Library for managing Intersection objects.
 */
declare interface intersections {
    get: LuaTableGetMethod<number, StreetIntersection>;
    set: LuaTableSetMethod<number, StreetIntersection>;
  
    /**
     * Get all intersections.
     * @returns A list of all Intersection objects.
     */
    getAll(): StreetIntersection[];
  
    /**
     * Get the number of intersections.
     * @returns How many Intersection objects there are.
     */
    getCount(): number;
  
  }
  
  declare const intersections: intersections;
  