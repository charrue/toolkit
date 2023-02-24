/**
 * 中文
 * @desc 从右到左遍历数组
 * @param {Array} arr 数组
 * @param {Function} fn 回调函数
 * @return {void}
 * @example
 * forEachRight([1, 2, 3], (item, index, arr) => {
 *  console.log(item, index, arr);
 * });
 * // 3 2 [1, 2, 3]
 */
export const forEachRight = <T>(arr: T[], fn: (item: T, index: number, arr: T[]) => void): void => {
  for (let i = arr.length - 1;i >= 0;i--) {
    fn(arr[i], i, arr);
  }
};
