import type { IterableKey } from "../type";
import { isStr, isNum, isSymbol } from "../../is/index";
import { has } from "../has";
import { objectKeys } from "../objectKeys/index";

export const invert = <T extends Record<IterableKey, IterableKey>, B extends boolean = false>(
  obj: T,
  merge?: B,
  getSymbol?: boolean,
) => {
  const keys = objectKeys(obj, getSymbol);
  if (keys.length === 0) return {};

  const output: Record<IterableKey, B extends false ? string : string[]> = {};

  keys.forEach((key) => {
    const val = obj[key];
    // 只将 number、string、symbol 类型的值作为键名放入 output 中
    if (isStr(val) || isNum(val) || isSymbol(val)) {
      if (merge) {
        if (has(output, val)) {
          (output as Record<IterableKey, IterableKey[]>)[val].push(key);
        } else {
          (output as Record<IterableKey, IterableKey[]>)[val] = [key];
        }
      } else {
        (output as Record<IterableKey, IterableKey>)[val] = key;
      }
    }
  });

  return output;
};
