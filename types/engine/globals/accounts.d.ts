/**
 * Library for managing Account objects.
 * @noSelf
 */
declare interface accounts {
  get: LuaTableGetMethod<number, Account>;
  set: LuaTableSetMethod<number, Account>;

  /**
   * Save all accounts to the `server.srk` file.
   */
  save: () => void;

  /**
   * Get all accounts.
   * @returns A list of all Account objects.
   */
  getAll: () => Account[];

  /**
   * Get the number of accounts.
   * @returns How many Account objects there are.
   */
  getCount: () => number;

  /**
   * Find an account by phone number.
   * @param phoneNumber The phone identifier to search for.
   * @returns The found account, or null
   */
  getByPhone(phoneNumber: string): Account | null;
}

declare const accounts: accounts;
