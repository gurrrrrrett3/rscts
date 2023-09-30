declare interface InventorySlot {
    readonly class: "InventorySlot";
    /**
     * The first item in the slot, if any.
     */
    primaryItem : Item

    /**
     * The second item in the slot, if any.
     */
    secondaryItem : Item
}

declare var InventorySlot: InventorySlot;