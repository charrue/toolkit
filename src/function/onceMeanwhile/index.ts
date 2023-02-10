import { isPromise } from "../../is/index";
import { AsyncFunction } from "../../typeDef";

/**
 * @description 保证函数只会执行一次，如果函数正在执行，则返回上一次执行的结果
 * @param fn 要执行的函数
 * @returns 返回一个函数，该函数只会执行一次
 * @example
 * const fn = onceMeanwhile(async () => {
 *  await sleep(1000);
 *  return 1;
 * });
 * const result = await Promise.all([fn(), fn(), fn()]);
 * console.log(result); // [1, 1, 1]
 */
export function onceMeanwhile<TFunc extends AsyncFunction>(fn: TFunc): TFunc {
  let running = false;
  let result: Promise<any>;
  const proxy = (...args: any[]) => {
    if (!running) {
      running = true;
      const res = fn(...args);
      if (isPromise(res)) {
        result = res.then((_) => {
          running = false;
          return _;
        });
      } else {
        running = false;
      }
    }
    return result;
  };
  return proxy as any;
}
