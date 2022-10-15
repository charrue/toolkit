/**
 * @description 将数组中的元素从from移动到to
 * @param { T[] } arr - 原数组
 * @param { number } from - 原始位置下标
 * @param { number } to - 最终位置下标
 * @returns { T[] } 移动后的数组
 * @example
 * move([1, 2, 3], 0, 0) // [1, 2, 3]
 * move([1, 2, 3], 1, 2) // [1, 3, 2]
 * move([1, 2, 3], -1, 0) // [3, 1, 2]
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}
