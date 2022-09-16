import { IterableKey } from "./type";
import { isFn } from '../is/index';

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