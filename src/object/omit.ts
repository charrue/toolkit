import { IterableKey } from "./type";

/**
 * @description 创建一个从 object 中排除一些的属性的对象。
 * @param { Array } data 来源对象
 * @param { Array } attrs 排除的属性
 */
export function omit(data: Record<IterableKey, any>, attrs: IterableKey[] = []) {
  const result = {
    ...data,
  };
  attrs.forEach((attr) => {
    delete result[attr];
  });
  return result;
}