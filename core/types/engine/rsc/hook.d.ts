/**
 * The hook library which hooked events will call upon.
 * The hook.run function must be defined to use hooks.
 */
declare class hook extends rs_hook {
  /**
   * Stops further hooks of this type from running.
   */
  static readonly continue = 1;
  /**
   * Stops further hooks and overrides default game functionality.
   */
  static readonly override = 2;

  /**
   * The currently loaded plugins.
   */
  static plugins: {
    [key: string]: Plugin;
  };

  /**
   * Regenerate the cache of enabled hooks.
   */
  static resetCache(): void;

  /**
   * Add a generic named hook.
   */
  static add<T extends keyof Hooks>(eventName: T, name: string, func: Hooks[T]): void;
  static add(eventName: string, name: string, func: (...args: any[]) => any): void;
}

interface Hooks {
  AccountDeathTax: (account: Account) => any;
  AccountTicketBegin: (identifier: number, ticket: number) => any;
  AccountTicketFound: (account?: Account) => any;
  AccountsSave: () => any;
  AreaCreateBlock: (blockX: number, blockY: number, blockZ: number, flags: number) => any;
  AreaDeleteBlock: (blockX: number, blockY: number, blockZ: number) => any;
  BulletCreate: (type: number, position: VectorObject, velocity: VectorObject, player: Player) => any;
  BulletHitHuman: (human: Human, bullet: Bullet) => any;
  BulletMayHit: (bullet: Bullet) => any;
  BulletMayHitHuman: (bullet: Bullet) => any;
  CalculateEarShots: (connection: Connection, player: Player) => any;
  CollideBodies: (aBody: RigidBody, bBody: RigidBody, aLocalPos: VectorObject, bLocalPos: VectorObject, normal: VectorObject, a: number, b: number, c: number, d: number) => any;
  ConsoleAutoComplete: (data: { response: string}) => any;
  ConsoleInput: (input: string) => any;
  CreateTraffic: (amount: number) => any;
  EconomyCarMarket: () => any;
  EventBullet: (type: number, position: VectorObject, velocity: VectorObject, item: Item) => any;
  EventBulletHit: (hitType: number, position: VectorObject, normal: VectorObject) => any;
  EventMessage: (speakerType: SpeakerType, message: string, speakerId: number, volume: VolumeLevel) => any;
  EventSound: (soundType: number, position: VectorObject, volume: number, pitch: number) => any;
  EventUpdateItemInfo: (item: Item) => any;
  EventPlayerUpdateFinance: (player: Player) => any;
  EventUpdatePlayer: (player: Player) => any;
  EventUpdateVehicle: (vehicle: Vehicle, updateType: number, partId: number, position: VectorObject, normal: VectorObject) => any;
  GrenadeExplode: (grenade: Item) => any;
      
}
