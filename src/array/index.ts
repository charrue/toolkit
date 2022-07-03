/* eslint-disable no-param-reassign */
interface IArrayLike<T> {
  length: number;
  [n: number]: T;
}

/**
 * @description 反向遍历数组
 * @param { T[] }  arr - 需要遍历的数组
 * @param { (value: T, index: number, self: T[]) => void }  callbackfn - 遍历的回调函数
 * @param { any }  thisArg - callbackfn的this指向，默认是undefined
 * @example
 * const arr = [1, 2, 3]
 * forEachRight(arr, (val, index, array) => {
 *   console.log(val, index, array)
 * })
 * // 3 2 [1, 2, 3]
 * // 2 1 [1, 2, 3]
 * // 1 0 [1, 2, 3]
 */
export const forEachRight = <T, C = any>(
  arr: T[],
  callbackfn: (value: T, index: number, self: T[]) => void,
  context?: C,
): void => {
  const l = arr.length;
  for (let i = l - 1;i >= 0;--i) {
    if (i in arr) {
      callbackfn.call(context, arr[i], i, arr);
    }
  }
};

/**
 * @description 计算数组中符合条件的元素的个数
 * @param { T[] }  arr - 需要遍历的数组
 * @param { (value: T, index: number, array: T[]) => void }  callbackfn - 遍历的回调函数
 * @param { any }  thisArg - callbackfn的this指向，默认是undefined
 * @returns { number } - 符合条件的元素的个数
 * @example
 * const arr = [1, 2, 3, 4, 5]
 * const num = count(arr, (val, index, array) => {
 *   return index > 3
 * })
 * // num: 2
 */
export const count = <T, C = any>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => boolean,
  ctx?: C,
): number => {
  let num = 0;
  arr.forEach((val, index, _arr) => {
    if (callbackfn.call(ctx, val, index, _arr)) {
      num += 1;
    }
  }, ctx);
  return num;
};

/**
 * @description 从后往前遍历数组，找到第一个符合条件的元素的索引
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合元素的索引，如果没有找到则返回-1
 * @example
 * const arr = [
 *   { name: "foo" },
 *   { name: "bar" },
 *   { size: 10 }
 * ]
 * const index = findIndexRight(arr, (item) => item.name === "bar") // 1
 */
export const findIndexRight = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): number => {
  const l = arr.length;
  for (let i = l - 1;i >= 0;i--) {
    if (callbackfn.call((thisArg), arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
};

/**
 * @description 从后往前遍历数组，找到第一个符合条件的元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合的元素
 * @example
 * const arr = [
 *   { name: "foo" },
 *   { name: "bar" },
 *   { size: 10 }
 * ]
 * const index = findIndexRight(arr, (item) => item.name === "bar")
 * // { name: "bar" }
 */
export const findRight = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T | undefined => {
  const i = findIndexRight(arr, callbackfn, thisArg);

  return i > 0 ? arr[i] : undefined;
};

/**
 * @description 清空数组
 * @param { IArrayLike<T> } arr - 需要清空的数组
 * @example
 * const arr = [1, 2, 3]
 * clear(arr) // arr: []
 */
export const clear = <T>(arr: IArrayLike<T>): void => {
  if (!Array.isArray(arr)) {
    for (let i = arr.length - 1;i >= 0;i--) {
      delete arr[i];
    }
  }
  arr.length = 0;
};

/**
 * @description 根据给定的条件移除数组中符合的第一个元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, self: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return { T } 返回移除的元素
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const item = removeIf(arr, (item) => {
 *   return item === 3
 * })
 * // 3
 */
export const removeIf = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T => {
  const index = arr.findIndex(callbackfn, thisArg);
  const item = arr[index];
  if (index >= 0) {
    arr.splice(index, 1);
  }
  return item;
};

/**
 * @description 根据给定的条件移除数组中的所有符合的元素
 * @param { T[] } arr - 原数组
 * @param { (value: T, index: number, array: T[]) => void } callbackfn - 条件函数
 * @param { any } thisArg - callbackfn的this指向，默认是undefined
 * @return { T[] } 返回所有移除的元素
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * const items = removeAllIf(arr, (item) => {
 *   return item > 3
 * })
 * // items: [4, 5]
 */
export const removeAllIf = <T, C>(
  originArray: T[],
  callbackfn: (value: T, index: number, array: T[]) => unknown,
  thisArg?: C,
): T[] => {
  const arr = ([] as T[]).concat(originArray);
  const removedArr = [] as T[];
  arr.forEach((value, index) => {
    if (callbackfn.call(thisArg, value, index, arr)) {
      removedArr.push(value);
      originArray.splice(index, 1);
    }
  });
  return removedArr;
};

/**
 * @description 将一个类数组转换为数组类型
 * @param { IArrayLike<T> }  arr - 类数组
 * @return { T[] } 转换后的数组
 * @example
 * toArray("1234") // ["1", "2", "3", "4"]
 * toArray({ length: 2 }) // [undefined, undefined]
 */
export const toArray = <T>(arrayLike: IArrayLike<T>): T[] => {
  if (Array.isArray(arrayLike)) {
    return arrayLike;
  }

  if (arrayLike.length === 0) return [];

  if (typeof arrayLike === "string") {
    return [...arrayLike];
  }

  const { length } = arrayLike;
  const arr = Array.from({ length: 2 }) as T[];

  if (length && length > 0) {
    let index = 0;
    for (const k in arrayLike) {
      if (arrayLike.hasOwnProperty(k) && k !== "length") {
        arr[index] = arrayLike[k];
        index++
      }
    }
  }
  return arr;
};

/**
 * @description 将数组中的元素从from移动到to
 * @param { T[] } arr - 原数组
 * @param { number } from - 原始位置下标
 * @param { number } to - 最终位置下标
 * @returns { T[] } 移动后的数组
 * @example
 * move([1, 2, 3], 0, 0) // [1, 2, 3]
 * move([1, 2, 3], 1, 2) // [1, 3, 2]
 * move([1, 2, 3], -1, 0) // [3, 1, 2]
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

/**
 * @description 将一个数重复n次，返回一个数组
 * @param { T } value - 需要重复的数据
 * @param { number } n - 重复次数
 * @returns { T[] } 重复后的数组
 * @example
 * const arr = repeat(0, 3) // [0, 0, 0]
 * const objArr = repeat({ name: "" }, 3) // [{ name: "" }, { name: "" }, { name: "" }]
 */
export const repeat = <T>(
  value: T,
  n: number,
): T[] => {
  const array = [];
  for (let i = 0;i < n;i++) {
    array[i] = value;
  }
  return array;
};


/**
 * @description 返回数组中不存在于其他数组中的值
 * @param { * } arr 任意要检查的多个数组
 * @returns { Array } 返回不存在于其他数组中的值
 * @example
 * difference([3, 2, 1], [4, 2]);
 * // [3, 1]
 */
export const difference = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)), [] as T[])
}

/**
 * @description 创建一个元素数组，该数组被分成大小长度的组
 * @param { T[] }  arr - 原数组
 * @param { number }  size - 每组的长度
 * @return { T[][] } 返回分组后的数组
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 */
export const chunk = <T>(input: T[], size: number): T[][] => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, [] as T[][]);
};
