/**
 * Library for managing Event objects.
 */
declare interface events {
  get: LuaTableGetMethod<number, Event>;
  set: LuaTableSetMethod<number, Event>;

  /**
   * Get all events.
   * @returns A list of all Event objects.
   */
  getAll(): Event[];

  /**
   * Get the number of events.
   * @returns How many Event objects there are.
   */
  getCount(): number;

  /**
   * Display a bullet with a sound, tracer, and optionally a muzzle flash and casing.
   * @param bulletType The type of bullet.
   * @param position The position of the bullet.
   * @param velocity The velocity of the bullet.
   * @param item The item that fired this bullet.
   * @returns The created event.
   */
  createBullet(bulletType: BulletType, position: VectorObject, velocity: VectorObject, item?: Item): Event;

  /**
   * Indicate a bullet has hit a person or thing.
   * @param hitType The type of hit.
   * @param position The position the bullet hit.
   * @param normal The normal of the surface the bullet hit.
   * @returns The created event.
   */
  createBulletHit(hitType: BulletHitType, position: VectorObject, normal: VectorObject): Event;

  /**
   * Show a chat message.
   * @param speakerType The type of speaker.
   * @param message The message to send. Max length 63.
   * @param speakerIndex The index of the speaker.
   * @param volumeLevel The volume level of the message.
   */
  createMessage(
    speakerType: SpeakerType,
    message: string,
    speakerIndex: number,
    volumeLevel: VolumeLevel
  ): Event;

  /**
   * Play a sound.
   * @param soundType The type of the sound.
   * @param position The position of the sound.
   * @param volume The volume of the sound.
   * @param pitch The pitch of the sound.
   * @returns The created event.
   */
  createSound(soundType: Sound, position: VectorObject, volume: number, pitch: number): Event;

   /**
   * Play a sound.
   * @param soundType The type of the sound.
   * @param position The position of the sound.
   * @returns The created event.
   */
  createSound(soundType: Sound, position: VectorObject): Event;

  /**
   * Display a grenade explosion.
   * @param position The position of the explosion.
   * @returns The created event.
   */
    createExplosion(position: VectorObject): Event;
}

declare const events: events;
