/**
 * Represents a networked action sent from a player.
 */
declare interface Action {
  readonly action: "Action";
  /**
   * The type of action.
   */
  type: number;

  a: number;
  b: number;
  c: number;
  d: number;
}
