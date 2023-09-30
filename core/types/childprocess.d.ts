/**
 * Represents a child process.
 */
declare interface ChildProcess {

    /**
     * Create a new ChildProcess.
	 * @param fileName string The path to a lua file to execute in the child process.
	 * @return ChildProcess childProcess The created ChildProcess.
     */
    new(fileName: string) : ChildProcess;

    /**
     * Check if the child process is currently running.
	 * @return boolean isRunning Whether the child process is running.
     */
    isRunning() : void;

    /**
     * Terminate the child process.
	 * Sends SIGTERM.
     */
    terminate() : void;

    /**
     * Get the exit code of the process.
	 * @return integer? exitCode The exit code of the child process, or nil if it has not exited.
     */
    getExitCode() : number;

    /** 
     * Send a message to the child process.
	 * Adds to a queue such that when `receiveMessage() -> string?` is called in the child process, this message can be returned.
	 * @param message string The message to send to the child process. 
     */
    sendMessage(message: string) : void;

     /**
     * Pop a message from the queue of messages received from the child process.
	 * @return string? message The oldest remaining message received from the child process, or nil if none are left.
     */
    recieveMessage() : string;

    /**
     * Set CPU limits of the child process.
	 * @param softLimit integer The soft limit, in seconds.
	 * @param hardLimit integer The hard limit, in seconds. May not have permission to increase once initially set.
     */
    setCPULimit(softLimit: number, hardLimit: number): void;

    /**
     * Set memory limits of the child process.
	 * @param softLimit integer The soft limit, in bytes.
	 * @param hardLimit integer The hard limit, in bytes. May not have permission to increase once initially set.
     */
    setMemoryLimit(softLimit: number, hardLimit: number): void;
     
    /**
     * Set maximum file size writing limits of the child process.
	 * @param softLimit integer The soft limit, in bytes.
	 * @param hardLimit integer The hard limit, in bytes. May not have permission to increase once initially set.
     */
    setFileSizeLimit(softLimit: number, hardLimit: number): void;

    /**
     * Get the priority (nice value) of the child process.
	 * @return integer priority The priority of the child process.
     */
    getPriority(): number;
    /**
     * Set the priority (nice value) of the child process.
	* @param priority integer The new priority of the child process.
     */
    setPriority(): void;



}

declare var ChildProcess: ChildProcess;