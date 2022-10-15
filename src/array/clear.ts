/**
 * @description 清空数组
 * @param { IArrayLike<T> } arr - 需要清空的数组
 * @example
 * const arr = [1, 2, 3]
 * clear(arr) // arr: []
 */
export const clear = <T>(arr: T[]): void => {
  // eslint-disable-next-line no-param-reassign
  arr.length = 0;
};
