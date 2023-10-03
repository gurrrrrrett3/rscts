/**
 * Library for managing Bullet objects.
 */
declare interface bullets {
    get: LuaTableGetMethod<number, Bullet>;
    set: LuaTableSetMethod<number, Bullet>;
  
    /**
     * Get all bullets.
     * @returns A list of all Bullet objects.
     */
    getAll(): Bullet[];
  
    /**
     * Get the number of bullets.
     * @returns How many Bullet objects there are.
     */
    getCount(): number;
  
    /**
     * Create a new bullet.
     * @param type The type of the bullet.
     * @param position The position of the bullet.
     * @param rotation The rotation of the bullet.
     * @param player The player who fired this bullet.
     * @returns The created bullet, or null on failure.
     */
    create(
      bulletType: BulletType,
      position: VectorObject,
      rotation: RotMatrixObject,
      player?: Player
    ): Bullet | null;
  }
  
  declare const bullets: bullets;
  