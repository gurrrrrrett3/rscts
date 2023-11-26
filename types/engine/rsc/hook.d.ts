/**
 * The hook library which hooked events will call upon.
 * The hook.run function must be defined to use hooks.
 */
declare class hook extends rs_hook {
  /**
   * Stops further hooks of this type from running.
   */
  static readonly continue = HookReturn.Continue;
  /**
   * Stops further hooks and overrides default game functionality.
   */
  static readonly override = HookReturn.Override;

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
  static add(eventName: string, name: string, func: (this: void, ...args: any[]) => HookFunctionReturn): void;
}

declare enum HookReturn {
  Continue = 1,
  Override = 2,
}

type HookFunctionReturn = void | HookReturn;

declare interface Hooks {
  AccountDeathTax: (this: void, account: Account) => HookFunctionReturn;
  AccountTicketBegin: (this: void, identifier: number, ticket: number) => HookFunctionReturn;
  AccountTicketFound: (this: void, account?: Account) => HookFunctionReturn;
  AccountsSave: (this: void) => HookFunctionReturn;
  AreaCreateBlock: (this: void, blockX: number, blockY: number, blockZ: number, flags: number) => HookFunctionReturn;
  AreaDeleteBlock: (this: void, blockX: number, blockY: number, blockZ: number) => HookFunctionReturn;
  BulletCreate: (this: void,
    type: BulletType,
    position: VectorObject,
    velocity: VectorObject,
    player: Player
  ) => HookFunctionReturn;
  BulletHitHuman: (this: void, human: Human, bullet: Bullet) => HookFunctionReturn;
  BulletMayHit: (this: void, bullet: Bullet) => HookFunctionReturn;
  BulletMayHitHuman: (this: void, bullet: Bullet) => HookFunctionReturn;
  CalculateEarShots: (this: void, connection: Connection, player: Player) => HookFunctionReturn;
  CollideBodies: (this: void,
    aBody: RigidBody,
    bBody: RigidBody,
    aLocalPos: VectorObject,
    bLocalPos: VectorObject,
    normal: VectorObject,
    a: number,
    b: number,
    c: number,
    d: number
  ) => HookFunctionReturn;
  ConsoleAutoComplete: (this: void, data: { response: string }) => HookFunctionReturn;
  ConsoleInput: (this: void, input: string) => HookFunctionReturn;
  CreateTraffic: (this: void, amount: number) => HookFunctionReturn;
  EconomyCarMarket: (this: void) => HookFunctionReturn;
  EventBullet: (this: void,
    type: BulletType,
    position: VectorObject,
    velocity: VectorObject,
    item: Item
  ) => HookFunctionReturn;
  EventBulletHit: (this: void, hitType: BulletHitType, position: VectorObject, normal: VectorObject) => HookFunctionReturn;
  EventMessage: (this: void,
    speakerType: SpeakerType,
    message: string,
    speakerId: number,
    volume: VolumeLevel
  ) => HookFunctionReturn;
  EventSound: (this: void,
    soundType: Sound,
    position: VectorObject,
    volume: number,
    pitch: number
  ) => HookFunctionReturn;
  EventUpdateItemInfo: (this: void, item: Item) => HookFunctionReturn;
  EventPlayerUpdateFinance: (this: void, player: Player) => HookFunctionReturn;
  EventUpdatePlayer: (this: void, player: Player) => HookFunctionReturn;
  EventUpdateVehicle: (this: void,
    vehicle: Vehicle,
    updateType: number,
    partId: number,
    position: VectorObject,
    normal: VectorObject
  ) => HookFunctionReturn;
  GrenadeExplode: (this: void, grenade: Item<ItemId.Grenade>) => HookFunctionReturn;
  HumanCollisionVehicle: (this: void, human: Human, vehicle: Vehicle) => HookFunctionReturn;
  HumanCreate: (this: void, position: VectorObject, rotation: RotMatrixObject, player: Player) => HookFunctionReturn;
  HumanDamage: (this: void, human: Human, bone: number, damage: number) => HookFunctionReturn;
  HumanDelete: (this: void, human: Human) => HookFunctionReturn;
  HumanLimbInverseKinematics: (this: void,
    human: Human,
    trunkBoneId: number,
    branchBoneId: number,
    destination: VectorObject,
    destinationAxis: RotMatrixObject,
    _vecA: VectorObject,
    _a: number,
    rotation: number,
    strength: number,
    _vecB: VectorObject,
    _vecC: VectorObject,
    flags: number
  ) => HookFunctionReturn;
  InterruptSignal: (this: void) => HookFunctionReturn;
  ItemComputerInput: (this: void,
    computer: Item<ItemId.Computer | ItemId.Arcade>,
    character: number
  ) => HookFunctionReturn;
  ItemCreate: (this: void, type: ItemType, position: VectorObject, rotation: RotMatrixObject) => HookFunctionReturn;
  ItemDelete: (this: void, item: Item) => HookFunctionReturn;
  ItemLink: (this: void, item: Item, childItem?: Item, parentHuman?: Human, slot?: number) => HookFunctionReturn;
  LineIntersectHuman: (this: void, human: Human, posA: VectorObject, posB: VectorObject) => HookFunctionReturn;
  LogicCoop: (this: void) => HookFunctionReturn;
  LogicRace: (this: void) => HookFunctionReturn;
  LogicRound: (this: void) => HookFunctionReturn;
  LogicTerminator: (this: void) => HookFunctionReturn;
  LogicVersus: (this: void) => HookFunctionReturn;
  LogicWorld: (this: void) => HookFunctionReturn;
  Logic: (this: void) => HookFunctionReturn;
  PacketBuilding: (this: void, connection: Connection) => HookFunctionReturn;
  PhysicsBullets: (this: void) => HookFunctionReturn;
  Physics: (this: void) => HookFunctionReturn;
  PhysicsRigidBodies: (this: void) => HookFunctionReturn;
  PlayerAI: (this: void, bot: Player) => HookFunctionReturn;
  PlayerActions: (this: void, player: Player) => HookFunctionReturn;
  PlayerChat: (this: void, player: Player, message: string) => HookFunctionReturn;
  PlayerCreate: (this: void) => HookFunctionReturn;
  PlayerDeathTax: (this: void, player: Player) => HookFunctionReturn;
  PlayerDelete: (this: void, player: Player) => HookFunctionReturn;
  PlayerGiveWantedLevel: (this: void, player: Player, victim: Player, basePoints: number) => HookFunctionReturn;
  PostAccountDeathTax: (this: void, account: Account) => HookFunctionReturn;
  PostAccountTicket: (this: void, account?: Account) => HookFunctionReturn;
  PostAccountsSave: (this: void) => HookFunctionReturn;
  PostAreaCreateBlock: (this: void, blockX: number, blockY: number, blockZ: number, flags: number) => HookFunctionReturn;
  PostAreaDeleteBlock: (this: void, blockX: number, blockY: number, blockZ: number) => HookFunctionReturn;
  PostBulletCreate: (this: void, bullet: Bullet) => HookFunctionReturn;
  PostCalculateEarShots: (this: void, connection: Connection, player: Player) => HookFunctionReturn;
  PostEcononmyCarMarket: (this: void) => HookFunctionReturn;
  PostEventBullet: (this: void,
    type: BulletType,
    position: VectorObject,
    velocity: VectorObject,
    item: Item
  ) => HookFunctionReturn;
  PostEventBulletHit: (this: void, hitType: BulletHitType, position: VectorObject, normal: VectorObject) => HookFunctionReturn;
  PostEventMessage: (this: void,
    speakerType: SpeakerType,
    message: string,
    speakerId: number,
    volume: VolumeLevel
  ) => HookFunctionReturn;
  PostEventSound: (this: void,
    soundType: Sound,
    position: VectorObject,
    volume: number,
    pitch: number
  ) => HookFunctionReturn;
  PostEventUpdateItemInfo: (this: void, item: Item) => HookFunctionReturn;
  PostEventUpdatePlayerFinance: (this: void, player: Player) => HookFunctionReturn;
  PostEventUpdatePlayer: (this: void, player: Player) => HookFunctionReturn;
  PostEventUpdateVehicle: (this: void,
    vehicle: Vehicle,
    updateType: number,
    partId: number,
    position: VectorObject,
    normal: VectorObject
  ) => HookFunctionReturn;
  PostGrenadeExplode: (this: void, grenade: Item<ItemId.Grenade>) => HookFunctionReturn;
  PostHumanCollisionVehicle: (this: void, human: Human, vehicle: Vehicle) => HookFunctionReturn;
  PostHumanCreate: (this: void, human: Human) => HookFunctionReturn;
  PostHumanDamage: (this: void, human: Human, bone: number, damage: number) => HookFunctionReturn;
  PostHumanDelete: (this: void, human: Human) => HookFunctionReturn;
  PostItemComputerInput: (this: void,
    computer: Item<ItemId.Computer | ItemId.Arcade>,
    character: number
  ) => HookFunctionReturn;
  PostItemCreate: (this: void, item: Item) => HookFunctionReturn;
  PostItemDelete: (this: void, item: Item) => HookFunctionReturn;
  PostItemLink: (this: void, item: Item, childItem?: Item, parentHuman?: Human, slot?: number) => HookFunctionReturn;
  PostLevelCreate: (this: void) => HookFunctionReturn;
  PostLogicCoop: (this: void) => HookFunctionReturn;
  PostLogicRace: (this: void) => HookFunctionReturn;
  PostLogicRound: (this: void) => HookFunctionReturn;
  PostLogicTerminator: (this: void) => HookFunctionReturn;
  PostLogicVersus: (this: void) => HookFunctionReturn;
  PostLogicWorld: (this: void) => HookFunctionReturn;
  PostLogic: (this: void) => HookFunctionReturn;
  PostPhysicsBullets: (this: void) => HookFunctionReturn;
  PostPhysics: (this: void) => HookFunctionReturn;
  PostPhysicsRigidBodies: (this: void) => HookFunctionReturn;
  PostPlayerAI: (this: void, bot: Player) => HookFunctionReturn;
  PostPlayerActions: (this: void, player: Player) => HookFunctionReturn;
  PostPlayerCreate: (this: void, player: Player) => HookFunctionReturn;
  PostPlayerDeathTax: (this: void, player: Player) => HookFunctionReturn;
  PostPlayerDelete: (this: void, player: Player) => HookFunctionReturn;
  PostPlayerGiveWantedLevel: (this: void, player: Player, victim: Player, basePoints: number) => HookFunctionReturn;
  PostResetGame: (this: void) => HookFunctionReturn;
  PostSendConnectResponse: (this: void, address: string, port: number, data: { message: string }) => HookFunctionReturn;
  PostSendPacket: (this: void,
    address: string,
    port: number,
    packetType: number,
    packetSize: number
  ) => HookFunctionReturn;
  PostServerRecieve: (this: void) => HookFunctionReturn;
  PostServerSend: (this: void) => HookFunctionReturn;
  PostTrafficCarAI: (this: void) => HookFunctionReturn;
  PostTrafficCarDestination: (this: void) => HookFunctionReturn;
  PostTrafficSimulation: (this: void) => HookFunctionReturn;
  PostVehicleCreate: (this: void, vehicle: Vehicle) => HookFunctionReturn;
  PostVehicleDamage: (this: void, vehicle: Vehicle, damage: number) => HookFunctionReturn;
  PostVehicleDelete: (this: void, vehicle: Vehicle) => HookFunctionReturn;
  ResetGame: (this: void, reason: number) => HookFunctionReturn;
  SendConnectResponse: (this: void, address: string, port: number, data: { message: string }) => HookFunctionReturn;
  SendPacket: (this: void, address: string, port: number, packetType: number, packetSize: number) => HookFunctionReturn;
  ServerRecieve: (this: void) => HookFunctionReturn;
  ServerSend: (this: void) => HookFunctionReturn;
  TrafficCarAI: (this: void, trafficCar: TrafficCar) => HookFunctionReturn;
  TrafficCarDestination: (this: void,
    trafficCar: TrafficCar,
    a: number,
    b: number,
    c: number,
    d: number
  ) => HookFunctionReturn;
  TrafficSimulation: (this: void) => HookFunctionReturn;
  VehicleCreate: (this: void,
    type: VehicleType,
    position: VectorObject,
    rotation: RotMatrixObject,
    color: number
  ) => HookFunctionReturn;
  VehicleDamage: (this: void, vehicle: Vehicle, damage: number) => HookFunctionReturn;
  VehicleDelete: (this: void, vehicle: Vehicle) => HookFunctionReturn;
}
