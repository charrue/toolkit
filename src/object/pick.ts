import { IterableKey } from "./type";

/**
 * @description 创建一个从 object 中选中一些的属性的对象。
 * @param { Array } data 来源对象
 * @param { Array } attrs 选出的属性
 * @returns { Object } 属性筛选后的对象
 */
export function pick(data: Record<IterableKey, any>, attrs: IterableKey[] = []) {
  const result: Record<IterableKey, any> = {};
  if (!Array.isArray(attrs)) return result;

  attrs.forEach((attr) => {
    result[attr] = data[attr];
  });
  return result;
}
