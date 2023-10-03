/**
 * Library for managing Building objects.
 */
declare interface buildings {
    get: LuaTableGetMethod<number, Building>;
    set: LuaTableSetMethod<number, Building>;
  
    /**
     * Get all buildings.
     * @returns A list of all Building objects.
     */
    getAll(): Building[];
  
    /**
     * Get the number of buildings.
     * @returns How many Building objects there are.
     */
    getCount(): number;
  
  }
  
  declare const buildings: buildings;
  