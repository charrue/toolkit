/**
 * @description 移除数组中符合条件的所有元素, 返回一个新数组
 * @param { T[] }  arr - 原数组
 * @param { (val: T, index: number, arr: T[]) => boolean } fn - 过滤函数
 * @return { T[] } 返回过滤后的数组
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const newArr = removeAllIf(arr, (item) => {
 * return item > 3
 * })
 * // [1, 2, 3]
 */
export const removeAllIf = <T>(arr: T[], fn: (val: T, index: number, arr: T[]) => boolean): T[] => {
  const newArr = [];
  for (let i = 0;i < arr.length;i++) {
    if (!fn(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
