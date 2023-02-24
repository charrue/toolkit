/**
 * 中文
 * @description 返回一个新数组，其中包含原始数组中的每个元素的唯一副本，基于提供的函数返回的值。
 * @param { T[] }  arr - 原数组
 * @param { (v: T) => K } fn - 用于确定唯一性的函数
 * @return { T[] } 返回唯一的值
 * @example
 * uniqueBy([{ id: 0 }, { id: 1 }, { id: 1 }], (v) => v.id);
 * // => [{ id: 0 }, { id: 1 }]
 */
export const uniqueBy = <T, K>(arr: T[], fn: (v: T) => K): T[] => {
  const keys = new Set();
  return arr.filter((x) => {
    const key = fn(x);
    if (keys.has(key)) return false;
    keys.add(key);
    return true;
  });
};
