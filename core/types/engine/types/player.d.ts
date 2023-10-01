/**
 * Represents a connected player, who may or may not be spawned in.
 * 💾 = To network changed value to clients, the `update` method needs to be called.
 * 💲 = To network changed value to clients, the `updateFinance` method needs to be called.
 */
declare interface Player<D extends Data = Data> {
  readonly class: "Player";

  /**
   * A Lua table which persists throughout the lifespan of this object.
   */
  readonly data: D;

  /**
   * See Account.subRosaID
   */
  subRosaID: number;

  /**
   * 💲 See Account.phoneNumber
   */
  phoneNumber: string;

  /**
   * 💲
   */
  money: number;

  /**
   * The value of their team's balance in world mode.
   */
  teamMoney: number;

  /**
   * The value of their team's budget in world mode.
   */
  budget: number;

  corporateRating: number;
  criminalRating: number;

  /**
   * 💾
   */
  team: number;

  /**
   * Ticks remaining until they can switch teams again.
   */
  teamSwitchTimer: number;

  /**
   * 💲 The amount of shares they own in their company.
   */
  stocks: number;

  /**
   *  How long this person has to wait to spawn in, in seconds.
   */
  spawnTimer: number;

  /**
   * Left to right stick shift position, 0 to 2.
   */
  gearX: number;

  /**
   * Forward to back stick shift position, -1 to 1.
   */
  gearY: number;

  /**
   * Left to right movement input, -1 to 1.
   */
  leftRightInput: number;

  /**
   * Backward to forward movement input, -1 to 1
   */
  forwardBackInput: number;

  /**
   * Radians.
   */
  viewYawDelta: number;
  /**
   * Radians.
   */
  viewPitch: number;
  /**
   * Radians.
   */
  freeLookYaw: number;
  /**
   * Radians.
   */
  freeLookPitch: number;
  /**
   * Radians.
   */
  viewYaw: number;

  /**
   * Bitflags of current buttons being pressed.
   */
  inputFlags: number;
  /**
   * Input flags from the last tick.
   */
  lastInputFlags: number;
  /**
   * 0 = run, 1 = walk, 2 = aim.
   */
  zoomLevel: number;
  /**
   *  What the input fields are used for. 0 = none, 1 = human, 2 = car, 3 = helicopter. Defaults to 0.
   */
  inputType: InputType;
  /**
   *  What tab in the menu they are currently in.
   */
  menuTab: number;
  /**
   *
   */
  numActions: number;
  /**
   *
   */
  lastNumActions: number;
  /**
   * 💾 0 = female, 1 = male.
   */
  gender: Gender;
  /**
   *  💾 Starts at 0.
   */
  skinColor: number;
  /**
   * 💾
   */
  hairColor: number;
  /**
   * 💾
   */
  hair: number;
  /**
   * 💾
   */
  eyeColor: number;
  /**
   * 💾 0 = casual, 1 = suit.
   */
  model: Model;
  /**
   * 💾
   */
  head: number;

  /**
   * 💾
   */
  suitColor: number;
  /**
   * 💾 0 = no tie, 1 = the first color.
   */
  tieColor: number;
  /**
   *  💾
   */
  necklace: number;
  /**
   * 🔒 The index of the array in memory this is (0-255).
   */
  readonly index: number;
  /**
   * 💾 Whether or not this exists, only change if you know what you are doing.
   */
  isActive: boolean;
  /**
   * 💾 Nickname of this player.
   */
  name: string;
  /**
   *
   */
  isAdmin: boolean;
  /**
   *
   */
  isReady: boolean;
  /**
   * 💾
   */
  isBot: boolean;
  /**
   *  💾 Whether the bot player should always run towards it's target.
   */
  isZombie: boolean;
  /**
   * 💾 The human they currently control.
   */
  human?: Human;
  /**
   * 🔒 Their network connection.
   */
  readonly connection?: Connection;
  /**
   * Their account.
   */
  account?: Account;
  /**
   * Their voice.
   */
  voice: Voice;
  /**
   * The location this bot will walk towards.
   */
  botDestination?: VectorObject;

  /**
   * Get a specific action.
   * @param index
   * @returns The desired action.
   */
  getAction(index: number): Action;

  /**
   * Get a specific menu button.
   * @param index The index between 0 and 31.
   */
  getMenuButton(index): MenuButton;

  /**
   * Fire a network event containing basic info.
   * @returns The created event.
   */
  update(): Event;

  /**
   * Fire a network event containing financial info.
   * @returns The created event.
   */
  updateFinance(): Event;

  /**
   * Remove self safely and fire a network event.
   */
  remove(): Event;

  /**
   * Create a red chat message only this player receives.
   * @param message The message to send.
   */
  sendChatMessage(message: string): void;
}

declare var Player: Player;
