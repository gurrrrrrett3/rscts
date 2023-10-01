/**
 * Represents a human, including dead bodies.
 */
declare interface Human<D extends Data = Data> {
  readonly class: "Human";

  /**
   * A Lua table which persists throughout the lifespan of this object.
   */
  data: D;

  stamina: number;
  maxStamina: number;

  /**
   * Seat index of the vehicle they are in.
   */
  vehicleSeat: number;

  /**
   * Ticks remaining until removal if dead.
   */
  despawnTime: number;

  /**
   * 0 = Standing,
   * 1 = Mid air,
   * 2 = Sliding,
   * 3 = Floating,
   * 4 = Inside of vehicle,
   * 5 = Laying on ground,
   * 6 = Straightened out legs.
   */
  movementState: MovementState;

  /**
   * 0 = Run,
   * 1 = Walk,
   * 2 = Aim,
   * 3 = Walking while aiming.
   */
  zoomLevel: ZoomLevel;

  /**
   * Level of screen blackness, 0-60.
   */
  damage: number;

  /**
   * Position.
   */

  pos: VectorObject;

  /**
   * Radians.
   */
  viewYaw: number;

  /**
   * Radians.
   */
  viewPitch: number;

  /**
   * Radians.
   */
  viewYaw2: number;

  /**
   * Left to right movement input, -1 to 1.
   */
  strafeInput: number;

  /**
   * Backward to forward movement input, -1 to 1.
   */
  walkInput: number;

  /**
   * Radians.
   */
  viewPitch2: number;

  /**
   * Bitflags of current buttons being pressed.
   * 0 = Nothing,
   * 1 = LMB,
   * 2 = RMB,
   * 4 = Space
   * 8 = CTRL,
   * 16 = Shift,
   * 32 = Q,
   * 2048 = E,
   * 4096 = R,
   * 8192 = F,
   * 262144 = DEL,
   * 524288 = Z.
   */
  inputFlags: number;

  /**
   * integer Input flags from the last tick,
   * Only properly functional in the Physics hook.
   * 0 = Nothing,
   * 1 = LMB,
   * 2 = RMB,
   * 4 = Space
   * 8 = CTRL,
   * 16 = Shift,
   * 32 = Q,
   * 2048 = E,
   * 4096 = R,
   * 8192 = F,
   * 262144 = DEL,
   * 524288 = Z.
   */
  lastInputFlags: number;

  /**
   * Dynamic health, 0-100.
   */
  health: number;

  /**
   * How much blood they have, 0-100. <50 and they will collapse.
   */
  bloodLevel: number;

  /**
   * Dynamic chest health, 0-100.
   */
  chestHP: number;

  /**
   * Dynamic head health, 0-100.
   */
  headHP: number;

  /**
   * Dynamic left arm health, 0-100.
   */
  leftArmHP: number;

  /**
   * Dynamic right arm health, 0-100.
   */
  rightArmHP: number;

  /**
   * Dynamic left leg health, 0-100.
   */
  leftLegHP: number;

  /**
   * Dynamic right leg health, 0-100.
   */
  rightLegHP: number;

  /**
   * Progress bar displayed in the center of the screen, 0-255. 0 = disabled.
   */
  progressBar: number;

  inventoryAnimationFlags: number;
  inventoryAnimationProgress: number;
  inventoryAnimationDuratio: number;
  inventoryAnimationHand: number;
  inventoryAnimationSlot: number;
  inventoryAnimationCounter: number;
  inventoryAnimationCounterFinished: number;

  /**
   * See Player.gender.
   */
  gender: Gender

  /**
   * See Player.head.
   */
  head: number;

  /**
   * See Player.skinColor.
   */
  skinColor: number;

  /**
   * See Player.hairColor.
   */
  hairColor: number;

  /**
   * See Player.hair.
   */
  hair: number;

  /**
   * See Player.eyeColor.
   */
  eyeColor: number;

  /**
   * See Player.model.
   */
  model: Model;

  /**
   * See Player.suitColor.
   */
  suitColor: number;

  /**
   * See Player.tieColor.
   */
  tieColor: number;

  /**
   * See Player.necklace.
   */
  necklace: number;

  /**
   * 0 = white, 1 = yellow, 2 = red. Change to a different value (ex. -1) to re-network appearance fields (model, gender, etc.)
   */
  lastUpdatedWantedGroup: number;

  /**
   * 🔒 The index of the array in memory this is (0-255).
   */
  readonly index: number;

  /**
   * Whether or not this exists, only change if you know what you are doing.
   */
  isActive: boolean;

  isAlive: boolean;

  /**
   * Whether they are immune to bullet and physics damage.
   */
  isImmortal: boolean;

  readonly isOnGround: boolean;
  readonly isStanding: boolean;
  isBleeding: boolean;
  /**
   * Player The player controlling this human.
   */
  player: Player;

  /**
   * Account The disconnected account that owns this human.
   */
  account: Account;

  /**
   * The vehicle they are inside.
   */
  vehicle: Vehicle;

  /**
   * Remove self safely and fire a network event.
   */
  remove(): void;

  /**
   * Teleport safely to a different position.
   * @param position VectorObject The position to teleport to.
   */
  teleport(position: VectorObject): void;

  /**
   * Speak a message.
   * @param message string The message to say.
   * @param volumeLevel integer The volume to speak at. 0 = whisper, 1 = normal, 2 = yell.
   */
  speak(message: string, volumeLevel: number): void;

  /**
   * Arm with a gun and magazines.
   * @param weaponType integer The ID of the item type. Must be a weapon.
   * @param magazineCount integer The number of magazines to give.
   */
  arm(weaponType: number, magazineCount: number): void;

  /**
   * Get a specific bone.
   * @param index integer The index between 0 and 15.
   * @return Bone bone The desired bone.
   */
  getBone(index: number): Bone;

  /**
   * Get a specific rigid body.
   * @param index integer The index between 0 and 15.
   * @return RigidBody rigidBody The desired rigid body.
   */
  getRigidBody(index: number): RigidBody;

  /**
   * Get a specific inventory slot.
   * @param index integer The index between 0 and 6.
   * @return InventorySlot inventorySlot The desired inventory slot.
   */
   getInventorySlot(index: number): InventorySlot;

  /**
	* Set the velocity of every rigid body.
	* @param velocity The velocity to set.
   */
  setVelocity(velocity: VectorObject): void;
 
  /**
   * Add velocity to every rigid body.
   * @param velocity The velocity to add.
   */
  addVelocity(velocity: VectorObject): void;

  /**
   * Mount an item to an inventory slot.
   * @param childItem Item The item to mount.
   * @param slot integer The slot to mount to.
   * @return boolean success Whether the mount was successful.
   */
   mountItem(childItem: Item, slot: number): boolean;

  /**
	* Apply damage points to a specific bone.
	* @param boneIndex integer The index of the bone to apply damage to.
	* @param damage integer The amount of damage to apply.
   */
   applyDamage(boneIndex: number, damage: number): void;

}

declare var Human: Human;


