/* eslint-disable no-param-reassign */
interface IArrayLike<T> {
  length: number;
  [n: number]: T;
}

/**
 * @description 反向遍历数组
 * @param  arr - 需要遍历的数组
 * @param  callbackfn - 遍历的回调函数
 * @param  thisArg - callbackfn的this指向，默认是undefined
 */
export const forEachRight = <T, C = any>(
  arr: IArrayLike<T>,
  callbackfn: (value: T, index: number, self: IArrayLike<T>) => void,
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
 * @param  arr - 需要遍历的数组
 * @param  callbackfn - 条件函数，返回true则计数
 * @param  thisArg - callbackfn的this指向，默认是undefined
 */
export const count = <T, C = any>(
  arr: T[],
  callbackfn: (value: T, index: number, array: T[]) => boolean,
  ctx?: C,
): number => {
  let num = 0;
  arr.forEach((val, index, _arr) => {
    if (callbackfn.call(ctx, val, index, _arr)) {
      ++num;
    }
  }, ctx);
  return num;
};

/**
 * @description 从后往前遍历数组，找到第一个符合条件的元素的索引
 * @param  arr - 原数组
 * @param  callbackfn - 条件函数
 * @param  thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合元素的索引，如果没有找到则返回-1
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
 * @param  arr - 原数组
 * @param  callbackfn - 条件函数
 * @param  thisArg - callbackfn的this指向，默认是undefined
 * @return 返回符合的元素
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
 * @description 清空数组中的
 * @param  arr - 需要清空的数组
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
 * @param arr - 原数组
 * @param callbackfn - 条件函数
 * @param thisArg - callbackfn的this指向，默认是undefined
 * @return 返回移除的元素
 */
export const removeIf = <T, C>(
  arr: T[],
  callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown,
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
 * @param arr - 原数组
 * @param callbackfn - 条件函数
 * @param thisArg - callbackfn的this指向，默认是undefined
 * @return 返回所有移除的元素
 */
export const removeAllIf = <T, C>(
  originArray: T[],
  callbackfn: (value: T, index: number, array: IArrayLike<T>) => unknown,
  thisArg?: C,
): T[] => {
  const arr = ([] as T[]).concat(originArray);
  const removedArr = [] as T[];
  forEachRight(arr, (value, index) => {
    if (callbackfn.call(thisArg, value, index, arr)) {
      removedArr.push(value);
      originArray.splice(index, 1);
    }
  });
  return removedArr;
};

/**
 * @description 将一个类数组转换为数组类型
 * @param  arr - 类数组
 * @return 转换后的数组
 */
export const toArray = <T>(arrayLike: IArrayLike<T>): T[] => {
  const { length } = arrayLike;
  const arr = Array.from({ length }) as T[];

  if (length > 0) {
    for (const k in arrayLike) {
      arr.push(arrayLike[k]);
    }
  }
  return arr;
};

/**
 * @description 反转数组中的元素，
 * @param arr - 原数组
 * @param n - 需要反转的元素个数，默认为数组长度
 * @returns 反转后的数组
 */
export const rotate = <T>(
  originArray: T[],
  n: number,
): T[] => {
  const arr = originArray;
  if (arr.length) {
    n = n ? n % arr.length : arr.length;
    if (n > 0) {
      // 将后n个元素，移动到前n个
      // splice会返回删除的元素，然后通过unshift插入到前面
      Array.prototype.unshift.apply(arr, arr.splice(-n, n));
    } else if (n < 0) {
      // 将前n个元素，移动到后n个
      // 将前n个元素移除，然后通过push放到数组后面
      Array.prototype.push.apply(arr, arr.splice(0, -n));
    }
  }
  return arr;
};

/**
 * @description 将数组中的元素从from移动到to
 * @param arr - 原数组
 * @param from - 原始位置下标
 * @param to - 最终位置下标
 * @returns 移动后的数组
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  return arr;
}

/**
 * @description 将一个数重复n次，返回一个数组
 * @param {*} value - 需要重复的数据
 * @param {number} n - 重复次数
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

export const flatten = <T>(...args: T[]): T[] => {
  const CHUNK_SIZE = 8192;

  const result: T[] = [];
  for (let i = 0;i < args.length;i++) {
    const element = args[i];
    if (Array.isArray(element)) {
      for (let c = 0;c < element.length;c += CHUNK_SIZE) {
        const chunk = element.slice(c, c + CHUNK_SIZE);
        const recurseResult = flatten(...chunk);
        for (let r = 0;r < recurseResult.length;r++) {
          result.push(recurseResult[r]);
        }
      }
    } else {
      result.push(element);
    }
  }
  return result;
};
