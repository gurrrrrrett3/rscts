declare class LuaImage {
  /**
   * Create a new Image.
   * @noSelf
   */
  static new(): LuaImage;

  /**
   * Free the image data.
   * This is automatically done whenever an Image is garbage collected,
   * but it's still better to call it explicitly when you're done reading.
   */
  free(): void;

  /**
   * Load an image from a file.
   * Many file formats are supported.
   */
  loadFromFile(path: string): boolean;

  /**
   * Load a blank image with desired dimensions.
   * @param width The width of the image.
   * @param height The height of the image.
   * @param numChannels The number of channels in the image.
   */
  loadBlank(width: number, height: number, numChannels: ImageChannels): boolean;

  /**
   * Get the RGB pixel color at a given coordinate.
   * Coordinate (0, 0) is the top left of the image.
   * @param x The x coordinate.
   * @param y The y coordinate.
   * @tupleReturn
   * @returns The RGB color at the given coordinate.
   */
  getRGB(x: number, y: number): [number, number, number];

  /**
   * Get the RGBA pixel color at a given coordinate.
   * Coordinate (0, 0) is the top left of the image.
   * @param x The x coordinate.
   * @param y The y coordinate.
   * @tupleReturn
   * @returns The RGBA color at the given coordinate.
   */
  getRGBA(x: number, y: number): [number, number, number, number];

  /**
   * Set the RGB pixel color at a given coordinate.
   * Coordinate (0, 0) is the top left of the image.
   * @param x The x coordinate.
   * @param y The y coordinate.
   * @param red The red value.
   * @param green The green value.
   * @param blue The blue value.
   */
  setPixel(x: number, y: number, red: number, green: number, blue: number): void;
  /**
   * Set the RGB pixel color at a given coordinate.
   * Coordinate (0, 0) is the top left of the image.
   * @param x The x coordinate.
   * @param y The y coordinate.
   * @param red The red value.
   * @param green The green value.
   * @param blue The blue value.
   * @param alpha The alpha value.
   */
  setPixel(x: number, y: number, red: number, green: number, blue: number, alpha: number): void;

  /**
   * Get the PNG representation of an image.
   */
  getPNG(): string;
}
