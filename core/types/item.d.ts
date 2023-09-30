/**
 * Represents an item in the world or someone's inventory.
 * 💾 = To network changed value to clients, the `updateType` method needs to be called.
 */
declare interface Item {
    readonly class: "Item";
   /**
   * A Lua table which persists throughout the lifespan of this object.
   */
  data: Data;
  type: ItemType;

  /**
   * Ticks remaining until removal.
   */
  despawnTime: number;

  /**
   * The slot this item occupies if it has a parent.
   */
  parentSlot: number;

  /**
   * The human this item is mounted to, if any.
   */
  parentHuman: Human;

  /**
   * The item this item is mounted to, if any.
   */
  parentItem: Item;

  /**
   * Position.
   */
  pos: Vector;

  /**
   * Velocity.
   */
  vel: Vector;

  /**
   * Rotation.
   */
  rot: RotMatrix;

  /**
   * How many bullets are inside this item.
   */
  bullets: number;
  cooldown: number;
  cashSpread: number;
  cashAmount: number;
  cashPureValue: number;
  computerCurrentLine: number;

  /**
   * Which line is at the top of the scre
   */
  comptuerTopLine: number;

  /**
   * The location of the cursor, -1 for no cursor.
   */
  computerCursor: number;

  /**
   * 🔒 The index of the array in memory this is (0-1023).
   */
  readonly index: number;

  /**
   * Whether or not this exists, only change if you know what you are doing.
   */
  isActive: boolean;

  /**
   * Whether this item is currently physically simulated.
   */
  hasPhysics: boolean;

  /**
   * Whether this item is settled by gravity.
   */
  physicsSettled: boolean;

  /**
   * How many ticks the item has been settling. Once it has reached 60, it will be settled.
   */
  physicsSettledTimer: number;

  /**
   * Whether the item is immovable.
   */
  isStatic: boolean;

  /**
   * The rigid body representing the physics of this item.
   */
  rigidBody: RigidBody;

  /**
   * The vehicle which this item is a key for.
   */
  vehicle: Vehicle;

  /**
   * The player who primed this grenade
   */
  grenadePrimer: Player;

  /**
   * 💾 The phone's texture ID. 0 for white, 1 for black.
   */
  phoneTexture: number;
  /**
   * The number used to call this phone.
   */
  phoneNumber: number;

  /**
   * integer 💾 The number currently displayed on the phone.
   */
  displayPhoneNumber: number;

  /**
   * integer The number that has been entered on the phone. Will reset upon reaching 4 digits.
   */
  enteredPhoneNumber: number;

  /**
   * Item The phone that this phone is connected to.
   */
  connectedPhone: Item;

  /**
   * Mount another item onto this item.
   * Ex. a magazine to this gun.
   * @param childItem Item The child item to mount to this item.
   * @param slot integer The slot to mount the child item to.
   * @return boolean success Whether the mount was successful.
   */
  mountItem(childItem: Item, slot: number): boolean;
   
  /**
   * Remove this item from any parent, back into the world.
   * @return boolean success Whether the unmount was successful.
   */
  unmount(): boolean;

  /**
   * Speak a message.
   * The item does not need to be a phone type.
   * @param message string The message to say.
   * @param volumeLevel integer The volume to speak at. 0 = whisper, 1 = normal, 2 = yell.
   */
  speak(message: string, volumeLevel: number): void;

  /**
   * Explode like a grenade, whether or not it is one.
   * Does not alter or remove the item.
   */
  explode(): void;

  /**
   * Set the text displayed on this item.
   * Visible if it is a Memo or a Newspaper item.
   * @param memo string The memo to set. Max 1023 characters.
   */
  setMemo(memo: string): void;

  /**
   * Update the color and text of a line and network it.
   * Only works if this item is a computer.
   * @param lineIndex integer Which line to transmit.
   */
  computerTransmitLine(lineIndex: number): void;

  /**
   * Increment the current line of a computer.
   * Only works if this item is a computer.
   */
  computerIncrementLine(): void;
 
  /**
   * Set the text to display on a line. Does not immediately network.
   * Only works if this item is a computer.
   * @param lineIndex integer Which line to edit.
   * @param text string The text to set the line to. Max 63 characters.
   */
  computerSetLine(lineIndex: number, text: string): void;

  /**
   * Set the colors to display on a line. Does not immediately network.
   * Only works if this item is a computer.
   * To set background color reverse the color hex I.E 0x0C becomes 0xC0
   * @param lineIndex integer Which line to edit.
   * @param colors string The colors to set the line to, where every character represents a color value from 0x00 to 0xFF. Max 63 characters.
   */
  computerSetLineColors(lineIndex: number, colors: number): void;

  /**
   * Set the color of a character on screen. Does not immediately network.
   * Only works if this item is a computer.
   * Uses the 16 CGA colors for foreground and background separately.
   * To set background color reverse the color hex I.E 0x0C becomes 0xC0
   * @param lineIndex integer Which line to edit.
   * @param columnIndex integer Which column to edit.
   * @param color integer The color to set, between 0x00 and 0xFF.
   */
  comptuterSetColor(lineIndex: number, columnIndex: number, color: number): void;

  /**
   * Add a bank bill to the stack of cash.
   * Only works if this item is a stack of cash.
   * @param position integer The relative position on the stack to add the bill, in no particular range.
   * @param value integer The denomination type of the bill (0-7).
   */
  cashAddBill(position: Vector, value: number): void;

  /**
	* Remove a bank bill from the stack of cash.
	* Only works if this item is a stack of cash.
	* @param position integer The relative position on the stack to find the bill to remove, in no particular range.
   */
  cashRemoveBill(position: Vector): void;


  /**
   * Get the total value of the stack of cash.
   * Only works if this item is a stack of cash.
   * @return integer value The total value in dollars.
   */
  cashGetBillValue(): number;
}

declare var Item: Item;