/**
 * @version JIT
 * @noSelf
 */
declare module bit32 {
  function tobit(x: number): number;
  function toHex(x: number, n: number): string;
  function bnot(x: number): number;
  function bor(x: number, ...y: number[]): number;
  function band(x: number, ...y: number[]): number;
  function bxor(x: number, ...y: number[]): number;
  function lshift(x: number, disp: number): number;
  function rshift(x: number, disp: number): number;
  function arshift(x: number, disp: number): number;
  function rol(x: number, disp: number): number;
  function ror(x: number, disp: number): number;
  function bswap(x: number): number;
}
