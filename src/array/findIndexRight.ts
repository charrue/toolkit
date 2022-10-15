/**
 * @description 从后往前遍历数组，找到第一个符合条件的元素的索引
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合元素的索引，如果没有找到则返回-1
 * @example
 * const arr = [
 *   { name: "foo" },
 *   { name: "bar" },
 *   { size: 10 }
 * ]
 * const index = findIndexRight(arr, (item) => item.name === "bar") // 1
 */
export const findIndexRight = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): number => {
  const l = arr.length;
  // eslint-disable-next-line no-plusplus
  for (let i = l - 1;i >= 0;i--) {
    if (callbackfn.call((thisArg), arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};
