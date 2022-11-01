import { isUnDef } from "../is/index";
import { has } from "./has";
import type { IterableKey } from "./type";

/**
 * @description 检查对象中是否存在指定的路径。只检查对象自身的属性。
 * @param { Object } obj - 要检查的对象
 * @param { Array } key - 要检查的属性名数组
 * @return { boolean } - 如果对象中存在该属性，则返回 true，否则返回 false
 * @example
 * const Key = Symbol("Key")
 * const obj = { a: { [Key]: 2, 3: 3 }, b: 4 };
 * has(obj, ["a", Key]) // true
 * has(obj, [Key, "a"]) // false
 * has(obj, [3, "b"]) // false
 * has(obj, []) // false
 */
export const hasPath = (obj: Record<IterableKey, any>, keys: IterableKey[]) => {
  if (isUnDef(obj) || keys.length === 0) return false;

  let index = 0;
  let val = obj;
  while (index < keys.length) {
    if (val && has(val, keys[index])) {
      val = obj[keys[index]];
      index += 1;
    } else {
      return false;
    }
  }
  return true;
};
