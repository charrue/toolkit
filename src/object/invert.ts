import type { IterableKey } from "./type";
import { isStr, isNum, isSymbol } from "../is/index";
import { has } from "./has";

/**
 * @description 创建一个object键值倒置后的对象
 * @param { Object } obj - 原始对象
 * @param { boolean } merge - 如果 array为true，则同键名的不同值将会合并为一个数组(数组顺序不能保证)；否则后面的值会覆盖前面的值
 * @return { Object } - 返回一个键值倒置后的对象
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 3 };
 * invert(obj) // { '1': 'a', '2': 'b', '3': 'd' }
 * invert(obj, true) // { '1': ['a'], '2': ['b'], '3': ['c', 'd'] }
 */
export const invert = <T extends Record<IterableKey, IterableKey>, B extends boolean = false>(
  obj: T,
  merge?: B,
  symbol?: boolean,
) => {
  const keys = symbol ? Object.getOwnPropertySymbols(obj) : Object.keys(obj);
  const len = keys.length;
  if (len === 0) return {};

  const output: Record<IterableKey, B extends false ? string : string[]> = {};

  keys.forEach((key) => {
    const val = obj[key];
    // 只将 number、string、symbol 类型的值作为键名放入 output 中
    if (isStr(val) || isNum(val) || isSymbol(val)) {
      if (merge) {
        if (has(output, val)) {
          (output as Record<IterableKey, IterableKey[]>)[val].push(key);
        }
        else {
          (output as Record<IterableKey, IterableKey[]>)[val] = [ key ];
        }
      }
      else {
        (output as Record<IterableKey, IterableKey>)[val] = key;
      }
    }
  });

  return output;
};
