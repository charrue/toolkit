/**
 * @description 重复一个值n次，返回一个数组
 * @param { T } val - 需要重复的数据
 * @param { number } n - 重复次数
 */
export const repeat = <T>(val: T, n: number): T[] => {
  const arr = [];
  for (let i = 0;i < n;i++) {
    arr.push(val);
  }
  return arr;
};
