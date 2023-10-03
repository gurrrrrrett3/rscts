/**
 * Library for managing RigidBody objects.
 */
declare interface rigidBodies {
    get: LuaTableGetMethod<number, RigidBody>;
    set: LuaTableSetMethod<number, RigidBody>;
  
    /**
     * Get all rigid bodies.
     * @returns A list of all RigidBody objects.
     */
    getAll(): RigidBody[];
  
    /**
     * Get the number of rigid bodies.
     * @returns How many RigidBody objects there are.
     */
    getCount(): number;
  }
  
  declare const rigidBodies: rigidBodies;
  