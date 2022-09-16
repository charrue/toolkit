import { isUnDef } from '../is/index';
import { IterableKey } from "./type";

/**
 * @description 检查对象中是否存在指定的属性。只检查对象自身的属性。
 * @param {Object} obj - 要检查的对象
 * @param {string} key - 要检查的属性名
 * @return { boolean } - 如果对象中存在该属性，则返回 true，否则返回 false
 * @example
 * const Key = Symbol("Key")
 * const obj = { a: 1, [Key]: 2, 3: 3 };
 * has(obj, "a") // true
 * has(obj, Key) // true
 * has(obj, 3) // true
 * has(obj, "4") // false
 */
export const has = <T = Record<IterableKey, any>>(obj: T, key: IterableKey) => {
  if (isUnDef(obj) || isUnDef(key)) return false

  return Object.prototype.hasOwnProperty.call(obj, key)
}
