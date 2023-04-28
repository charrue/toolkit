// fork from https://github.com/moroshko/shallow-equal/blob/master/src/index.ts

const shallowEqualObj = (a: any, b: any) => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  const len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (let i = 0;i < len;i++) {
    const key = aKeys[i];

    if (
      a[key] !== b[key]
      || !Object.prototype.hasOwnProperty.call(b, key)
    ) {
      return false;
    }
  }

  return true;
};

const shallowEqualArr = (a: any, b: any) => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  const len = a.length;

  if (b.length !== len) {
    return false;
  }

  for (let i = 0;i < len;i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

type Comparable = Record<string, any> | any[] | null | undefined;

/**
 * @description 浅比较两个对象或数组
 * @param a 对象或数组
 * @param b 对象或数组
 * @returns {boolean} 是否相等
 * @example
 * shallowEqual({ a: "a" }, { b: "b" }); // false
 * shallowEqual({ a: "a" }, { a: "a" }); // true
 */
export const shallowEqual = <T extends Comparable>(a?: T, b?: T) => {
  const aIsArr = Array.isArray(a);
  const bIsArr = Array.isArray(b);

  if (aIsArr !== bIsArr) {
    return false;
  }

  if (aIsArr && bIsArr) {
    return shallowEqualArr(a, b);
  }

  return shallowEqualObj(a, b);
};
