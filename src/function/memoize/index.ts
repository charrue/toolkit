import { AnyFunction } from "../../typeDef";
import { isEqual as _isEqual } from "../../object/isEqual/index";

/**
 * @description 函数记忆化，缓存函数的执行结果
 * @param func 需要记忆化的函数
 * @param isEqual 比较函数的执行参数是否相等，默认使用 isEqual
 * @returns 返回一个函数，该函数会缓存函数的执行结果
 * @example
 * const fn = vi.fn((a: number, b: number) => a + b);
 * const memoized = memoize(fn);
 * const result = memoized(1, 2);
 * expect(result).toBe(3);
 * expect(fn).toBeCalledWith(1, 2);
 * expect(fn).toBeCalledTimes(1);
 * const result2 = memoized(1, 2);
 * expect(result2).toBe(3);
 * expect(fn).toBeCalledTimes(1);
 * const result3 = memoized(2, 2);
 * expect(result3).toBe(4);
 * expect(fn).toBeCalledTimes(2);
 */
export const memoize = <T extends AnyFunction>(
  func: T,
  isEqual: (a: any[], b: any[]) => boolean = _isEqual,
): T & { reset: () => void } => {
  type MemoizeFn = T & { reset: () => void };

  let lastArgs: any[] | null = null;
  let lastResult: any = null;
  function memoized(...args: any[]) {
    const argsArr = Array.from(args);
    if (!isEqual(lastArgs || [], argsArr)) {
      // eslint-disable-next-line prefer-rest-params, prefer-spread
      lastResult = func.apply(null, args);
      lastArgs = argsArr;
    }
    return lastResult;
  }

  (memoized as MemoizeFn).reset = () => {
    lastArgs = null;
    lastResult = null;
  };
  return memoized as MemoizeFn;
};
