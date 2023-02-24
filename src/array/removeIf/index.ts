/**
 * @description 根据条件删除数组中的元素
 * @param { T[] }  arr - 原数组
 * @param { (value: T, index: number, array: T[]) => unknown } callbackfn - 回调函数
 * @return { T } 返回删除的元素
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const item = removeIf(arr, (item) => {
 *  return item === 3
 * })
 * // 3
 */
export const removeIf = <T>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
) => {
  const index = arr.findIndex(callbackfn);
  const item = arr[index];
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return item;
};
