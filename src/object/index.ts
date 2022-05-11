import { isFn } from './../is/index';
import cloneDeep from "lodash.clonedeep";
import _merge from "lodash.merge"
import _mergeWith from "lodash.mergewith"
import { isUnDef, isStr, isNum, isSymbol } from '../is/index';

type PlainObject = Record<string, any>
type IterableKey = string | number | symbol

/**
 * 判断object是否具有key属性
 * @param { Object } object 需要判断的对象
 * @param { string } key 键名
 */
export function hasIn(object: PlainObject, key: string): boolean {
  return object != null && key in Object(object);
}

/**
 * 创建一个从 object 中选中一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 选出的属性
 */
export function pick(data: PlainObject, attrs: string[] = []) {
  const result: PlainObject = {};
  attrs.forEach((attr) => {
    if (typeof data[attr] !== "undefined") {
      result[attr] = data[attr];
    }
  });
  return result;
}

/**
 * 创建一个从 object 中排除一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 排除的属性
 */
export function omit(data: PlainObject, attrs: string[] = []) {
  const result = {
    ...data,
  };
  attrs.forEach((attr) => {
    delete result[attr];
  });
  return result;
}


/**
 * 深度拷贝
 * @param raw - 要深拷贝的值
 * @returns 深拷贝后的值
 */
export function deepClone(raw: any) {
  return cloneDeep(raw);
}
export const merge = _merge
export const mergeWith = _mergeWith

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
  if (isUnDef(obj) || keys.length === 0) return false

  let index = 0;
  let val = obj;
  while (index < keys.length) {
    if (val && has(val, keys[index])) {
      val = obj[keys[index]];
      index += 1;
    } else {
      return false
    }
  }
  return true
}

/**
 * @description 创建一个object键值倒置后的对象
 * @param { Object } obj - 原始对象
 * @param { boolean } merge - 如果 array为true，则同键名的不同值将会合并为一个数组(数组顺序不能保证)；否则后面的值会覆盖前面的值
 * @return { Object } - 返回一个键值倒置后的对象
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 3 };
 * invert(obj) // { '1': 'a', '2': 'b', '3': 'd' }
 * invert(obj, true) // { '1': ['a'], '2': ['b'], '3': ['c', 'd'] }
 */
export const invert = <T extends Record<IterableKey, IterableKey>, B extends boolean = false>(
  obj: T,
  merge?: B,
  symbol?: boolean,
) => {
  const keys = symbol ? Object.getOwnPropertySymbols(obj) : Object.keys(obj)
  let len = keys.length;
  if (length === 0) return {};

  let output: Record<IterableKey, B extends false ? string : string[]> = {}
  let index = 0;
  while (index < len) {
    const key = keys[index]
    const val = obj[key]
    // 只将 number、string、symbol 类型的值作为键名放入 output 中
    if (isStr(val) || isNum(val) || isSymbol(val)) {
      if (merge) {
        if (has(output, val)) {
          (output as Record<IterableKey, IterableKey[]>)[val].push(key)
        } else {
          (output as Record<IterableKey, IterableKey[]>)[val] = [key]
        }
      } else {
        (output as Record<IterableKey, IterableKey>)[val] = key
      }
    }

  }
  return output;
}

/**
 * @description 遍历 object，对 object 中的每对 key 和 value 执行方法 callback。
 * @param { Object } obj - 要遍历的对象
 * @param { Function } callback - 回调函数
 * @param { boolean } symbol - 是否遍历 symbol 类型的属性
 */
export const forEachObjIndexed = <
  T extends Record<IterableKey, any>,
  Iterator extends (key: keyof T, value: T[keyof T], obj: T) => void,
  B extends boolean = false
>(obj: T, callback: Iterator, symbol?: B) => {
  const keys = symbol ? Object.getOwnPropertySymbols(obj) : Object.keys(obj)
  if (keys.length === 0) return

  keys.forEach(k => {
    if (isFn(callback)) {
      callback(k, obj[k], obj)
    }
  })
}