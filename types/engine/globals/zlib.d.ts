/**
 * Library for zlib compression/decompression.
 */
declare class zlib {
  /**
   * Compress a string of bytes.
   * Available in worker threads.
   * @param input The string to compress.
   * @returns The compressed data. This can be longer than the input if the input is very short.
   */
  public static compress(input: string): string;

  /**
   * Decompress a string of bytes.
   * Available in worker threads.
   * @param compressed The compressed data.
   * @param uncompressedSize The maximum size of the uncompressed data. This should be the size of the original data before compression.
   * @returns The decompressed data.
   */
  public static decompress(compressed: string, uncompressedSize: number): string;
}
