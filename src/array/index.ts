/**
 * @description 反向遍历数组
 * @param  arr - 需要遍历的数组
 * @param  callbackfn - 遍历的回调函数
 * @param  thisArg - callbackfn的this指向，默认是undefined
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
 * @description 清空数组
 * @param  arr - 需要清空的数组
 */
export const clear = <T>(arr: T[]): void => {
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
 * @param arr - 原数组
 * @param callbackfn - 条件函数
 * @param thisArg - callbackfn的this指向，默认是undefined
 * @return 返回所有移除的元素
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

interface IArrayLike<T> {
  length: number;
  [n: number]: T;
}
/**
 * @description 将一个类数组转换为数组类型
 * @param  arr - 类数组
 * @return 转换后的数组
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


/**
 * @description 返回数组中不存在于其他数组中的值
 */
export const difference = <T>(...arrays: T[][]): T[] => {
  return arrays.reduce((a, b) => a.filter(c => !b.includes(c)), [] as T[])
}

/**
 * @description 创建一个元素数组，该数组被分成大小长度的组
 * @param  arr - 原数组
 * @param  size - 每组的长度
 * @return 返回分组后的数组
 */
export const chunk = <T>(input: T[], size: number): T[][] => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0
      ? [...arr, [item]]
      : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, [] as T[][]);
};
