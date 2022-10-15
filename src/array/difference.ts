/**
 * @description 返回数组中不存在于其他数组中的值
 * @param { * } arr 任意要检查的多个数组
 * @returns { Array } 返回不存在于其他数组中的值
 * @example
 * difference([3, 2, 1], [4, 2]);
 * // [3, 1]
 */
// eslint-disable-next-line max-len
export const difference = <T>(...arrays: T[][]): T[] => arrays.reduce((a, b) => a.filter((c) => !b.includes(c)), [] as T[]);
