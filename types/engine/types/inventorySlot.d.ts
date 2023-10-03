declare interface InventorySlot<Primary = Item, Secondary = Item> {
    readonly class: "InventorySlot";
    /**
     * The first item in the slot, if any.
     */
    primaryItem : Primary

    /**
     * The second item in the slot, if any.
     */
    secondaryItem : Secondary
}

declare var InventorySlot: InventorySlot;