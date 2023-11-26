declare class OpusEncoder {
  /**
   * Create a new OpusEncoder.
   * @noSelf
   */
  static new(): OpusEncoder;

  /**
   * Close the opened file, if there is any.
   * This is automatically done whenever an OpusEncoder is garbage collected,
   * but it's still better to call it explicitly when you're done encoding.
   */
  close(): void;

  /**
   * Open a file for encoding. Closes any previously opened file.
   * Throws if the file cannot be opened.
   * @param fileName The path to a 48000Hz signed 16-bit raw PCM file to use for encoding.
   */
  open(path: string): void;

  /**
   * Rewind the opened file to the beginning.
   */
  rewind(): void;

  /**
   * Encode a single 20ms Opus frame.
   * Throws if the file is not opened, or there is a problem when reading or encoding.
   * @return The next encoded frame, or nil if there is nothing left to read.
   */
  encodeFrame(): string | null;
  /**
   * Encode a single 20ms Opus frame.
   * Throws if the file is not opened, or there is a problem when reading or encoding.
   * @param input The raw PCM bytes, which contains either 960 32-bit floats or 960 16-bit signed integers.
   * @return The next encoded frame, or nil if there is nothing left to read.
   */
  encodeFrame(input: streets): string | null;
}
