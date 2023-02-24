/**
 * @description 将数组分组，每组的长度为size，最后一组的长度可能小于size
 * @param { T[] }  arr - 原数组
 * @param { number }  size - 每组的长度
 * @return { T[][] } 返回分组后的数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 */
// eslint-disable-next-line max-len
export const chunk = <T>(input: T[], size: number): T[][] => {
  if (size <= 0) {
    return [];
  }
  if (size >= input.length) {
    return [input];
  }

  const result: T[][] = [];
  let i = 0;
  while (i < input.length) {
    result.push(input.slice(i, i + size));
    i += size;
  }
  return result;
};
