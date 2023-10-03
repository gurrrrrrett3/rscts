/**
 * Library for directly reading and writing any memory.
 */
interface memory {
  /**
   * Get the base address of the server executable.
   */
  getBaseAddress(): number;

  /**
   * Get the address of a game object.
   */
  getAddress(
    object:
      | Connection
      | Account
      | Player
      | Human
      | ItemType
      | Item
      | Vehicle
      | Bullet
      | Bone
      | RigidBody
      | Bond
      | Action
      | MenuButton
      | StreetLane
      | Street
      | StreetIntersection
  ): number;

  /**
   * Read a signed 1-byte integer from memory.
   */
  readByte(address: number): number;

  /**
   * Read an unsigned 1-byte integer from memory.
   */
  readUByte(address: number): number;

  /**
   * Read a signed 2-byte integer from memory.
   */
  readShort(address: number): number;

  /**
   * Read an unsigned 2-byte integer from memory.
   */
  readUShort(address: number): number;

  /**
   * Read a signed 4-byte integer from memory.
   */
  readInt(address: number): number;

  /**
   * Read an unsigned 4-byte integer from memory.
   */
  readUInt(address: number): number;

  /**
   * Read a signed 8-byte integer from memory.
   */
  readLong(address: number): number;

  /**
   * Read an unsigned 8-byte integer from memory.
   */
  readULong(address: number): number;

  /**
   * Read a single-precision floating point number from memory.
   */
  readFloat(address: number): number;

  /**
   * Read a double-precision floating point number from memory.
   */
  readDouble(address: number): number;

  /**
   * Read many bytes from memory.
   * @param address The address to read from.
   * @param length The number of bytes to read.
   */
  readBytes(address: number, length: number): string;

  /**
   * Write a signed 1-byte integer to memory.
   */
  writeByte(address: number, value: number): void;

  /**
   * Write an unsigned 1-byte integer to memory.
   */
  writeUByte(address: number, value: number): void;

  /**
   * Write a signed 2-byte integer to memory.
   */
  writeShort(address: number, value: number): void;

  /**
   * Write an unsigned 2-byte integer to memory.
   */
  writeUShort(address: number, value: number): void;

  /**
   * Write a signed 4-byte integer to memory.
   */
  writeInt(address: number, value: number): void;

  /**
   * Write an unsigned 4-byte integer to memory.
   */
  writeUInt(address: number, value: number): void;

  /**
   * Write a signed 8-byte integer to memory.
   */
  writeLong(address: number, value: number): void;

  /**
   * Write an unsigned 8-byte integer to memory.
   */
  writeULong(address: number, value: number): void;

  /**
   * Write a single-precision floating point number to memory.
   */
  writeFloat(address: number, value: number): void;

  /**
   * Write a double-precision floating point number to memory.
   */
  writeDouble(address: number, value: number): void;

  /**
   * Write many bytes to memory.
   * @param address The address to write to.
   * @param bytes The bytes to write.
   */
  writeBytes(address: number, bytes: string): void;
}

declare const memory: memory;