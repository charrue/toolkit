/**
 * @description 根据给定的条件移除数组中的所有符合的元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return { T[] } 返回所有移除的元素
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const items = removeAllIf(arr, (item) => {
 *   return item > 3
 * })
 * // items: [4, 5]
 */
export const removeAllIf = <T, C>(
  originArray: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T[] => {
  const arr = ([] as T[]).concat(originArray);
  const removedArr = [] as T[];
  arr.forEach((value, index) => {
    if (callbackfn.call(thisArg, value, index, arr)) {
      removedArr.push(value);
      originArray.splice(index, 1);
    }
  });
  return removedArr;
};
