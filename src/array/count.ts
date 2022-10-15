/**
 * @description 计算数组中符合条件的元素的个数
 * @param { T[] }  arr - 需要遍历的数组
 * @param { (value: T, index: number, array: T[]) => void }  callbackfn - 遍历的回调函数
 * @param { any }  thisArg - callbackfn的this指向，默认是undefined
 * @returns { number } - 符合条件的元素的个数
 * @example
 * const arr = [1, 2, 3, 4, 5]
 * const num = count(arr, (val, index, array) => {
 *   return index > 3
 * })
 * // num: 2
 */
export const count = <T, C = any>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => boolean,
  ctx?: C,
): number => {
  let num = 0;
  arr.forEach((val, index, _arr) => {
    if (callbackfn.call(ctx, val, index, _arr)) {
      num += 1;
    }
  }, ctx);
  return num;
};
