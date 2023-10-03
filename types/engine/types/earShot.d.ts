/**
 * Represents a state of someone being able to hear another person's voice chat.
 */
declare interface EarShot {
  readonly class: "EarShot";

  /**
   *  Whether or not this exists.
   */
  isActive: boolean;
  /**
   * The player that the voice is coming from.
   */
  player?: Player;
  /**
   * The human that the voice appears to come from.
   */
  human?: Human;
  /**
   *   The item that the voice appears to come from.
   */
  receivingItem?: Item;
  /**
   *  The item that the other person is using to transmit their voice.
   */
  transmittingItem?: Item;
  /**
   * The distance of the voice.
   */
  distance: number;
  /**
   * The estimated volume of the voice, 0 to 1.
   */
  volume: number;
}
