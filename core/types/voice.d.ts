/**
 * Represents a player's transmitting voice chat.
 */
declare interface Voice {

    readonly class: "Voice";
    /**
     * The volume of the voice. 0 = whisper, 1 = normal, 2 = yell.
     */
    volumeLevel: number;

    /**
     * The current frame being sent, 0-63.
     */
    currentFrame: number;

    /**
     * Whether the voice is not transmitting.
     */
    isSilenced: boolean;

    /**
     * Get A specific encoded Opus frame.
     * @param index The frame to get, 0-63.
     * @returns The encoded Opus frame.
     */
    getFrame(index: number): string;

    /**
     * Set a specific encoded Opus frame.
     * @param index The frame to set, 0-63.
     * @param frame The encoded Opus frame.
     * @param volumeLevel The volume of the frame. 0 = whisper, 1 = normal, 2 = yell.
     */
    setFrame(index: number, frame: string, volumeLevel: number): void;
}

declare var Voice: Voice