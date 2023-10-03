/**
 * Library for managing Street objects.
 */
declare interface streets {
    get: LuaTableGetMethod<number, Street>;
    set: LuaTableSetMethod<number, Street>;
  
    /**
     * Get all streets.
     * @returns A list of all Street objects.
     */
    getAll(): Street[];
  
    /**
     * Get the number of streets.
     * @returns How many Street objects there are.
     */
    getCount(): number;
  
  }
  
  declare const streets: streets;
  