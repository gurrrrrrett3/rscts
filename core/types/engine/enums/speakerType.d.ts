declare enum SpeakerType {
  /**
   * Sent to all players, also used for death chat.
   */
  Announce = 0,
  /**
   * Normal player chat.
   */
  Chat = 1,
  /**
   * Item speak, like cell phones.
   */
  Item = 2,
  /**
   * Eliminator blue chat.
   */
  Eliminator = 3,
  /**
   * Only sent to admins.
   */
  Admin = 4,
  /**
   * Red message chat.
   */
  Message = 6,
}
