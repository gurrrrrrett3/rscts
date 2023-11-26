declare interface os {
    /**
     * Get the contents of a directory.
     * Available in worker threads.
     */
    listDirectory(path: string): ListDirectoryEntry[];

    /**
     * Create a directory if it does not already exist.
     * Available in worker threads.
     */
    createDirectory(path: string): boolean;

    /**
     * Get the time that a file was last modified.
     * Available in worker threads.
     */
    getLastWriteTime(path: string): number;

    /**
     * Get an accurate clock value counting up in real seconds.
     * Available in worker threads.
     */
    realClock(): number;
    
}
