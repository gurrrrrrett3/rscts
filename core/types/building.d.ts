/**
 * Represents a special building..
 */
declare interface Building {
    readonly class: "Building";

    /**
     * The type of building. 1 = base, 3 = car shop, 4 = laboratory, 5 = cosmetics shop, 6 = bank, 8 = gun shop, 9 = burger shop.
     */
    type: number;

    /**
     * The origin point of the building. May not be inside.
     */
	pos: Vector;

    /**
     * The rotation which this building spawns things (players in a base, cars in a car shop, etc.)
     */
	spawnRot: RotMatrix;

    /**
     * The first corner of a cuboid, where the interior of the building is contained inside.
     */
	interiorCuboidA: Vector;

    /**
     * The second corner of a cuboid, where the interior of the building is contained inside.
     */
	interiorCuboidB: Vector;

    /**
     * How many cars are for sale at this car shop.
     */
	numShopCars: number;

    /**
     * How many cars have been sold at this car shop.
     */
	shopCarSales: number;

    /**
     * 🔒 The index of the array in memory this is. 
     */
	readonly index: number;

    getShopCar(index: number): ShopCar;
}

declare var Building: Building;