/**
 * Represents a special building..
 */
declare interface Building<Type extends BuildingType = BuildingType> {
    readonly class: "Building";

    /**
     * The type of building. 1 = base, 3 = car shop, 4 = laboratory, 5 = cosmetics shop, 6 = bank, 8 = gun shop, 9 = burger shop.
     */
    type: Type;

    /**
     * The origin point of the building. May not be inside.
     */
	pos: VectorObject;

    /**
     * The rotation which this building spawns things (players in a base, cars in a car shop, etc.)
     */
	spawnRot: RotMatrixObject;

    /**
     * The first corner of a cuboid, where the interior of the building is contained inside.
     */
	interiorCuboidA: VectorObject;

    /**
     * The second corner of a cuboid, where the interior of the building is contained inside.
     */
	interiorCuboidB: VectorObject;

    /**
     * How many cars are for sale at this car shop.
     */
	numShopCars: Type extends BuildingType.CarShop ? number : never; 

    /**
     * How many cars have been sold at this car shop.
     */
	shopCarSales: Type extends BuildingType.CarShop  ? number : never;

    /**
     * The index of the array in memory this is. 
     */
	readonly index: number;

    getShopCar: Type extends BuildingType.CarShop  ? (index: number) => ShopCar : never;
}

declare var Building: Building;