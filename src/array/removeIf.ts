/**
 * @description 根据给定的条件移除数组中符合的第一个元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, self: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return { T } 返回移除的元素
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const item = removeIf(arr, (item) => {
 *   return item === 3
 * })
 * // 3
 */
export const removeIf = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T => {
  const index = arr.findIndex(callbackfn, thisArg);
  const item = arr[index];
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return item;
};
