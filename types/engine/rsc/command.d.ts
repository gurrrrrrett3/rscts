declare class Command {
    info: string;
    usage: string;
    alias: string[];
    
    public canCall(player: Player): boolean;
    public call(player: Player, human: Human | undefined, args: string[]): void;
    public autoComplete(args: string[]): string[];
    cooldownTime: number;
}