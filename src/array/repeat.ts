/**
 * @description 将一个数重复n次，返回一个数组
 * @param { T } value - 需要重复的数据
 * @param { number } n - 重复次数
 * @returns { T[] } 重复后的数组
 * @example
 * const arr = repeat(0, 3) // [0, 0, 0]
 * const objArr = repeat({ name: "" }, 3) // [{ name: "" }, { name: "" }, { name: "" }]
 */
export const repeat = <T>(
  value: T,
  n: number,
): T[] => {
  const array = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0;i < n;i++) {
    array[i] = value;
  }
  return array;
};
