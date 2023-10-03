/**
 * Library for managing ItemType objects.
 */
declare interface itemTypes {
    get: LuaTableGetMethod<number, ItemType>;
    set: LuaTableSetMethod<number, ItemType>;
    
    /**
     * Get all item types.
     * @returns A list of all ItemType objects.
     */
    getAll(): ItemType[];
    
    /**
     * Get the number of item types.
     * @returns How many ItemType objects there are.
     */
    getCount(): number;
    
    /**
     * Find an item type by name.
     * @param name The name to search for.
     * @returns The found item type, or null
     */
    getByName(name: ItemName): ItemType | null;
}

declare const itemTypes: itemTypes;