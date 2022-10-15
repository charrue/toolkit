/**
 * @description 反向遍历数组
 * @param { T[] }  arr - 需要遍历的数组
 * @param { (value: T, index: number, self: T[]) => void }  callbackfn - 遍历的回调函数
 * @param { any }  thisArg - callbackfn的this指向，默认是undefined
 * @example
 * const arr = [1, 2, 3]
 * forEachRight(arr, (val, index, array) => {
 *   console.log(val, index, array)
 * })
 * // 3 2 [1, 2, 3]
 * // 2 1 [1, 2, 3]
 * // 1 0 [1, 2, 3]
 */
export const forEachRight = <T, C = any>(
  arr: T[],
  callbackfn: (value: T, index: number, self: T[]) => void,
  context?: C,
): void => {
  const l = arr.length;
  // eslint-disable-next-line no-plusplus
  for (let i = l - 1;i >= 0;--i) {
    if (i in arr) {
      callbackfn.call(context, arr[i], i, arr);
    }
  }
};
