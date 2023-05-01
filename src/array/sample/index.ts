// fork from https://github.com/lodash/lodash/blob/master/sample.js
import { randomInt } from "../../number/randomInt/index";
/**
 * @description 从数组中随机获取一个元素
 * @example
 * sample([1, 2, 3, 4])
 * // => 2
 */
export function sample<T>(array: T[]) {
  const length = array == null ? 0 : array.length;
  return length ? array[randomInt(length - 1, 0)] : undefined;
}
