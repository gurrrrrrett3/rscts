/**
 * Represents a button in the world base menu.
 */
interface MenuButton {

    readonly class: "MenuButton";
    
    /**
     * The ID of the button.
     */
    id: number;

    /**
     * The text displayed on the button.
     */
    text: string;

}