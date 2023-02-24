/**
 * @description 移动数组中的元素
 * @param { T[] }  arr - 原数组
 * @param { number } from - 要移动的元素的索引
 * @param { number } to - 移动到的位置的索引
 * @return { T[] } 返回移动后的数组
 * @example
 * move([1, 2, 3, 4, 5], 0, 2);
 * // => [2, 3, 1, 4, 5]
 */
export const move = <T>(arr: T[], from: number, to: number): T[] => {
  const newArr = [...arr];
  newArr.splice(to, 0, newArr.splice(from, 1)[0]);
  return newArr;
};
