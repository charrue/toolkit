/**
 * @description 统计数组中每个元素出现的次数
 * @param { T[] } arr - 原数组
 * @param { (item: T, index: number, arr: T[]) => C } callback - 回调函数
 * @return { Map<C, number> } 返回一个Map，key为数组中的元素，value为元素出现的次数
 * @example
 * const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
 * const map = count(arr, (item) => item);
 * // map: Map(5) { 1 => 2, 2 => 2, 3 => 2, 4 => 2, 5 => 2 }
 */
export const count = <T, C = any>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => C,
) => {
  const map = new Map<C, number>();
  arr.forEach((item, index) => {
    const key = callback(item, index, arr);
    map.set(key, (map.get(key) || 0) + 1);
  });
  return map;
};
