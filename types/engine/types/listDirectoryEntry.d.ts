declare interface ListDirectoryEntry<File extends boolean = boolean> {
  /**
   * Whether the entry is a directory.
   */
  isDirectory: File;

  /**
   * The name of the file/directory. Ex. "asphalt2.png".
   */
  name: string;

  /**
   * The stem of the filename if this is a file. Ex. "asphalt2".
   */
  stem: File extends true ? string : never;

  /**
   * The extension of the filename if this is a file. Ex. ".png".
   */
  extension: File extends true ? string : never;
}
