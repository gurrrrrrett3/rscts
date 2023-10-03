/**
 * Represents a bone in a human.
 */
declare interface Bone {
    readonly class: "Bone";
    /**
     * Position.
     */
    pos: VectorObject;

    /**
     * Second position.
     */
    pos2: VectorObject;

    /**
     * Velocity.
     */
    vel: VectorObject;

    /**
     * Rotation.
     */
    rot: RotMatrixObject;
}

declare var Bone: Bone;