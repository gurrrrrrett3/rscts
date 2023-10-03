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
  static add(eventName: string, name: string, func: (...args: any[]) => HookFunctionReturn): void;
}

declare enum HookReturn {
  Continue = 1,
  Override = 2,
}

type HookFunctionReturn = void | HookReturn;

interface Hooks {
  AccountDeathTax: (account: Account) => HookFunctionReturn;
  AccountTicketBegin: (identifier: number, ticket: number) => HookFunctionReturn;
  AccountTicketFound: (account?: Account) => HookFunctionReturn;
  AccountsSave: () => HookFunctionReturn;
  AreaCreateBlock: (blockX: number, blockY: number, blockZ: number, flags: number) => HookFunctionReturn;
  AreaDeleteBlock: (blockX: number, blockY: number, blockZ: number) => HookFunctionReturn;
  BulletCreate: (
    type: number,
    position: VectorObject,
    velocity: VectorObject,
    player: Player
  ) => HookFunctionReturn;
  BulletHitHuman: (human: Human, bullet: Bullet) => HookFunctionReturn;
  BulletMayHit: (bullet: Bullet) => HookFunctionReturn;
  BulletMayHitHuman: (bullet: Bullet) => HookFunctionReturn;
  CalculateEarShots: (connection: Connection, player: Player) => HookFunctionReturn;
  CollideBodies: (
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
  ConsoleAutoComplete: (data: { response: string }) => HookFunctionReturn;
  ConsoleInput: (input: string) => HookFunctionReturn;
  CreateTraffic: (amount: number) => HookFunctionReturn;
  EconomyCarMarket: () => HookFunctionReturn;
  EventBullet: (
    type: number,
    position: VectorObject,
    velocity: VectorObject,
    item: Item
  ) => HookFunctionReturn;
  EventBulletHit: (hitType: number, position: VectorObject, normal: VectorObject) => HookFunctionReturn;
  EventMessage: (
    speakerType: SpeakerType,
    message: string,
    speakerId: number,
    volume: VolumeLevel
  ) => HookFunctionReturn;
  EventSound: (
    soundType: number,
    position: VectorObject,
    volume: number,
    pitch: number
  ) => HookFunctionReturn;
  EventUpdateItemInfo: (item: Item) => HookFunctionReturn;
  EventPlayerUpdateFinance: (player: Player) => HookFunctionReturn;
  EventUpdatePlayer: (player: Player) => HookFunctionReturn;
  EventUpdateVehicle: (
    vehicle: Vehicle,
    updateType: number,
    partId: number,
    position: VectorObject,
    normal: VectorObject
  ) => HookFunctionReturn;
  GrenadeExplode: (grenade: Item<ItemId.Grenade>) => HookFunctionReturn;
  HumanCollisionVehicle: (human: Human, vehicle: Vehicle) => HookFunctionReturn;
  HumanCreate: (position: VectorObject, rotation: RotMatrixObject, player: Player) => HookFunctionReturn;
  HumanDamage: (human: Human, bone: number, damage: number) => HookFunctionReturn;
  HumanDelete: (human: Human) => HookFunctionReturn;
  HumanLimbInverseKinematics: (
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
  InterruptSignal: () => HookFunctionReturn;
  ItemComputerInput: (
    computer: Item<ItemId.Computer | ItemId.Arcade>,
    character: number
  ) => HookFunctionReturn;
  ItemCreate: (type: ItemType, position: VectorObject, rotation: RotMatrixObject) => HookFunctionReturn;
  ItemDelete: (item: Item) => HookFunctionReturn;
  ItemLink: (item: Item, childItem?: Item, parentHuman?: Human, slot?: number) => HookFunctionReturn;
  LineIntersectHuman: (human: Human, posA: VectorObject, posB: VectorObject) => HookFunctionReturn;
  LogicCoop: () => HookFunctionReturn;
  LogicRace: () => HookFunctionReturn;
  LogicRound: () => HookFunctionReturn;
  LogicTerminator: () => HookFunctionReturn;
  LogicVersus: () => HookFunctionReturn;
  LogicWorld: () => HookFunctionReturn;
  Logic: () => HookFunctionReturn;
  PacketBuilding: (connection: Connection) => HookFunctionReturn;
  PhysicsBullets: () => HookFunctionReturn;
  Physics: () => HookFunctionReturn;
  PhysicsRigidBodies: () => HookFunctionReturn;
  PlayerAI: (bot: Player) => HookFunctionReturn;
  PlayerActions: (player: Player) => HookFunctionReturn;
  PlayerChat: (player: Player, message: string) => HookFunctionReturn;
  PlayerCreate: () => HookFunctionReturn;
  PlayerDeathTax: (player: Player) => HookFunctionReturn;
  PlayerDelete: (player: Player) => HookFunctionReturn;
  PlayerGiveWantedLevel: (player: Player, victim: Player, basePoints: number) => HookFunctionReturn;
  PostAccountDeathTax: (account: Account) => HookFunctionReturn;
  PostAccountTicket: (account?: Account) => HookFunctionReturn;
  PostAccountsSave: () => HookFunctionReturn;
  PostAreaCreateBlock: (blockX: number, blockY: number, blockZ: number, flags: number) => HookFunctionReturn;
  PostAreaDeleteBlock: (blockX: number, blockY: number, blockZ: number) => HookFunctionReturn;
  PostBulletCreate: (bullet: Bullet) => HookFunctionReturn;
  PostCalculateEarShots: (connection: Connection, player: Player) => HookFunctionReturn;
  PostEcononmyCarMarket: () => HookFunctionReturn;
  PostEventBullet: (
    type: number,
    position: VectorObject,
    velocity: VectorObject,
    item: Item
  ) => HookFunctionReturn;
  PostEventBulletHit: (hitType: number, position: VectorObject, normal: VectorObject) => HookFunctionReturn;
  PostEventMessage: (
    speakerType: SpeakerType,
    message: string,
    speakerId: number,
    volume: VolumeLevel
  ) => HookFunctionReturn;
  PostEventSound: (
    soundType: number,
    position: VectorObject,
    volume: number,
    pitch: number
  ) => HookFunctionReturn;
  PostEventUpdateItemInfo: (item: Item) => HookFunctionReturn;
  PostEventUpdatePlayerFinance: (player: Player) => HookFunctionReturn;
  PostEventUpdatePlayer: (player: Player) => HookFunctionReturn;
  PostEventUpdateVehicle: (
    vehicle: Vehicle,
    updateType: number,
    partId: number,
    position: VectorObject,
    normal: VectorObject
  ) => HookFunctionReturn;
  PostGrenadeExplode: (grenade: Item<ItemId.Grenade>) => HookFunctionReturn;
  PostHumanCollisionVehicle: (human: Human, vehicle: Vehicle) => HookFunctionReturn;
  PostHumanCreate: (human: Human) => HookFunctionReturn;
  PostHumanDamage: (human: Human, bone: number, damage: number) => HookFunctionReturn;
  PostHumanDelete: (human: Human) => HookFunctionReturn;
  PostItemComputerInput: (
    computer: Item<ItemId.Computer | ItemId.Arcade>,
    character: number
  ) => HookFunctionReturn;
  PostItemCreate: (item: Item) => HookFunctionReturn;
  PostItemDelete: (item: Item) => HookFunctionReturn;
  PostItemLink: (item: Item, childItem?: Item, parentHuman?: Human, slot?: number) => HookFunctionReturn;
  PostLevelCreate: () => HookFunctionReturn;
  PostLogicCoop: () => HookFunctionReturn;
  PostLogicRace: () => HookFunctionReturn;
  PostLogicRound: () => HookFunctionReturn;
  PostLogicTerminator: () => HookFunctionReturn;
  PostLogicVersus: () => HookFunctionReturn;
  PostLogicWorld: () => HookFunctionReturn;
  PostLogic: () => HookFunctionReturn;
  PostPhysicsBullets: () => HookFunctionReturn;
  PostPhysics: () => HookFunctionReturn;
  PostPhysicsRigidBodies: () => HookFunctionReturn;
  PostPlayerAI: (bot: Player) => HookFunctionReturn;
  PostPlayerActions: (player: Player) => HookFunctionReturn;
  PostPlayerCreate: (player: Player) => HookFunctionReturn;
  PostPlayerDeathTax: (player: Player) => HookFunctionReturn;
  PostPlayerDelete: (player: Player) => HookFunctionReturn;
  PostPlayerGiveWantedLevel: (player: Player, victim: Player, basePoints: number) => HookFunctionReturn;
  PostResetGame: () => HookFunctionReturn;
  PostSendConnectResponse: (address: string, port: number, data: { message: string }) => HookFunctionReturn;
  PostSendPacket: (
    address: string,
    port: number,
    packetType: number,
    packetSize: number
  ) => HookFunctionReturn;
  PostServerRecieve: () => HookFunctionReturn;
  PostServerSend: () => HookFunctionReturn;
  PostTrafficCarAI: () => HookFunctionReturn;
  PostTrafficCarDestination: () => HookFunctionReturn;
  PostTrafficSimulation: () => HookFunctionReturn;
  PostVehicleCreate: (vehicle: Vehicle) => HookFunctionReturn;
  PostVehicleDamage: (vehicle: Vehicle, damage: number) => HookFunctionReturn;
  PostVehicleDelete: (vehicle: Vehicle) => HookFunctionReturn;
  ResetGame: (reason: number) => HookFunctionReturn;
  SendConnectResponse: (address: string, port: number, data: { message: string }) => HookFunctionReturn;
  SendPacket: (address: string, port: number, packetType: number, packetSize: number) => HookFunctionReturn;
  ServerRecieve: () => HookFunctionReturn;
  ServerSend: () => HookFunctionReturn;
  TrafficCarAI: (trafficCar: TrafficCar) => HookFunctionReturn;
  TrafficCarDestination: (
    trafficCar: TrafficCar,
    a: number,
    b: number,
    c: number,
    d: number
  ) => HookFunctionReturn;
  TrafficSimulation: () => HookFunctionReturn;
  VehicleCreate: (
    type: VehicleType,
    position: VectorObject,
    rotation: RotMatrixObject,
    color: number
  ) => HookFunctionReturn;
  VehicleDamage: (vehicle: Vehicle, damage: number) => HookFunctionReturn;
  VehicleDelete: (vehicle: Vehicle) => HookFunctionReturn;
}
