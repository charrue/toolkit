/**
 * @description 简单的数组去重
 * @param { T[] }  arr - 原数组
 * @return { T[] } 返回唯一的值
 * @example
 * unique([1, 2, 2, 3, 4, 4, 5]);
 * // => [1, 2, 3, 4, 5]
 */
export const simpleUnique = <T>(input: T[]): T[] => [...new Set(input)];
