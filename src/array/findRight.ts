import { findIndexRight } from "./findIndexRight";
/**
 * @description 从后往前遍历数组，找到第一个符合条件的元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合的元素
 * @example
 * const arr = [
 *   { name: "foo" },
 *   { name: "bar" },
 *   { size: 10 }
 * ]
 * const index = findIndexRight(arr, (item) => item.name === "bar")
 * // { name: "bar" }
 */
export const findRight = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T | undefined => {
  const i = findIndexRight(arr, callbackfn, thisArg);

  return i > 0 ? arr[i] : undefined;
};
