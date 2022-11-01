/**
 * @description 将一个类数组转换为数组类型
 * @param { IArrayLike<T> }  arr - 类数组
 * @return { T[] } 转换后的数组
 * @example
 * toArray("1234") // ["1", "2", "3", "4"]
 * toArray({ length: 2 }) // [undefined, undefined]
 */
export const toArray = (arrayLike: any) => {
  if (Array.isArray(arrayLike)) {
    return arrayLike;
  }

  if (arrayLike.length === 0) return [];

  if (typeof arrayLike === "string") {
    return [...arrayLike];
  }

  const { length } = arrayLike;
  const arr = Array.from({ length });

  if (length && length > 0) {
    let index = 0;
    for (const k in arrayLike) {
      if (arrayLike.hasOwnProperty(k) && k !== "length") {
        arr[index] = arrayLike[k];
        index += 1;
      }
    }
  }
  return arr;
};
