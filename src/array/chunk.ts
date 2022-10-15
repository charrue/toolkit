/**
 * @description 创建一个元素数组，该数组被分成大小长度的组
 * @param { T[] }  arr - 原数组
 * @param { number }  size - 每组的长度
 * @return { T[][] } 返回分组后的数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 */
// eslint-disable-next-line max-len
export const chunk = <T>(input: T[], size: number): T[][] => input.reduce((arr, item, idx) => (idx % size === 0
  ? [...arr, [ item ] ]
  : [...arr.slice(0, -1), [...arr.slice(-1)[0], item] ]), [] as T[][]);
