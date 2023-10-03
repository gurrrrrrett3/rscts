/**
 * Library for managing Bond objects.
 */
declare interface bonds {
    get: LuaTableGetMethod<number, Bond>;
    set: LuaTableSetMethod<number, Bond>;
  
    /**
     * Get all bonds.
     * @returns A list of all Bond objects.
     */
    getAll(): Bond[];
  
    /**
     * Get the number of bonds.
     * @returns How many Bond objects there are.
     */
    getCount(): number;
  
  }
  
  declare const bonds: bonds;
  