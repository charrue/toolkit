/**
 * @description 传入一个值和一个回调函数，返回值
 * @param value 要传递给回调函数的值
 * @param callback 回调函数
 * @returns 返回值
 * @example
 * const fn = (a: number) => console.log(a);
 * const result = tap(1, fn);
 * console.log(result); // 1
 */
export const tap = <T>(value: T, callback: (value: T) => void): T => {
  callback(value);
  return value;
};
