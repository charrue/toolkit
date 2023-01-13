import { IterableKey } from "../type";

export const objectKeys = <K extends IterableKey = IterableKey, B extends boolean = false>(
  obj: Record<K, any>,
  getSymbol?: B,
) => {
  let keys: IterableKey[] = Object.keys(obj);
  if (getSymbol) {
    keys = keys.concat(Object.getOwnPropertySymbols(obj));
  }
  return keys as (B extends true ? IterableKey[] : string[]);
};
