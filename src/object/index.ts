import { isFn } from './../is/index';
import cloneDeep from "lodash.clonedeep";
import _merge from "lodash.merge"
import _mergeWith from "lodash.mergewith"
import { isUnDef, isStr, isNum, isSymbol } from '../is/index';

type PlainObject = Record<string, any>
type IterableKey = string | number | symbol

/**
 * @description 判断object是否具有key属性。非symbol类型的键名将会强制转为字符串。
 * @param { Object } object - 需要判断的对象
 * @param { string } key - 键名
 * @returns { boolean } 是否具有key属性
 * @example
 * const key = Symbol("Key")
 * const obj = { a: 1, [key]: 2, 100: 100 }
 *
 * hasIn(obj, "a") // true
 * hasIn(obj, key) // true
 * hasIn(obj, 100) // true
 * hasIn(obj, "100") // true
 * hasIn(obj, "101") // false
 */
export function hasIn(object: PlainObject, key: IterableKey): boolean {
  return object != null && key in Object(object);
}

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

/**
 * 深度拷贝
 * @param raw - 要深拷贝的值
 * @from https://github.com/davidmarkclements/rfdc
 * @returns 深拷贝后的值
 */
export const deepClone = <T>(raw: T): T => {
  const refs: any[] = []
  const refsNew: any[] = []

  const baseClone = <T extends any>(raw: T, proto: boolean = false): T => {
    if (typeof raw !== "object" || isUnDef(raw)) return raw;

    if (raw instanceof Date) return new Date(raw) as T

    if (Array.isArray(raw)) return baseCloneArray(raw) as T

    if (raw instanceof Map) return new Map(baseClone(raw)) as T

    if (raw instanceof Set) return new Set(baseClone(raw)) as T

    const result: Record<string, any> = {}
    refs.push(raw)
    refsNew.push(result)
    for (let k in raw) {
      if (proto) {
        if (Object.hasOwnProperty.call(raw, k) === false) continue
      }

      let cur = raw[k]
      if (typeof cur !== "object" || isUnDef(cur)) {
        result[k] = cur
      } else if (cur instanceof Date) {
        result[k] = new Date(cur)
      } else if (cur instanceof Map) {
        result[k] = new Map(baseClone(cur))
      } else if (cur instanceof Set) {
        result[k] = new Set(baseClone(cur))
      } else if (ArrayBuffer.isView(cur)) {
        result[k] = baseCopyBuffer(cur)
      } else {
        // 如果是循环引用
        const index = refs.indexOf(cur)
        if (index !== -1) {
          result[k] = cur
        } else {
          result[k] = baseClone(cur)
        }
      }
    }

    refs.pop()
    refsNew.pop()

    return result as T
  }

  const baseCopyBuffer = (raw: any) => {
    if (raw instanceof Buffer) {
      return Buffer.from(raw)
    }

    return new raw.constructor(raw.buffer.slice(), raw.byteOffset, raw.length)
  }

  const baseCloneArray = <T>(raw: T[]): T[] => {
    return raw.map((val) => {
      if (typeof val !== "object" || isUnDef(val)) {
        return val
      } else if (val instanceof Date) {
        return new Date(val)
      } else if (ArrayBuffer.isView(val)) {
        return baseCopyBuffer(val)
      } else {
        // 如果是循环引用
        const index = refs.indexOf(val)
        if (index !== -1) {
          return val
        } else {
          return baseClone(val)
        }
      }
    }) as T[]
  }

  return baseClone(raw)
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