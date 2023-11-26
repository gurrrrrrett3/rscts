declare module "main.libjson" {
    function encode(value: any): string;
    function decode(json: string): any;
}