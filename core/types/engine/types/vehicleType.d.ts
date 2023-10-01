/**
 * Represents a type of vehicle that exists.
 */
declare interface VehicleType {
    readonly class: "VehicleType";
     usesExternalModel: boolean;

     /**
      * 0 = cannot be controlled, 1 = car, 2 = helicopter.
      */
     controllableState: number;

     /**
      * 🔒 The index of the array in memory this is.
      */
     readonly index: number;

     /**
      * Not networked.
      */
     name: string;

     /**
      * How much money is taken when bought.
      */
     price: number;

     /**
      * In kilograms, kind of.
      */
     mass: number;
}

declare var VehicleType: VehicleType;