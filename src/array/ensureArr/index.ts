/**
 * @description 确保返回一个数组
 * @param { T | T[] } val - 需要转换的值
 * @return { T[] } 返回一个数组
 * @example
 * ensureArr(1);
 * // => [1]
 * ensureArr([1]);
 * // => [1]
 */
export const ensureArr = <T>(val: T | T[]): T[] => (Array.isArray(val) ? val : [val]);
