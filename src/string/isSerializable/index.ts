/**
 * @description 判断是否可以被序列化
 * @example
 * ```typescript
 * isSerializable({}) // true
 * isSerializable({ a: 1 }) // true
 * isSerializable({ a: () => {} }) // false
 * ```
 */
export function isSerializable(o: any): boolean {
  try {
    JSON.stringify(o);
    return true;
  } catch (err) {
    return false;
  }
}
