/**
 * @description 传入一个函数和参数，返回函数执行的结果
 * @param fn 要执行的函数
 * @param args 要传递给函数的参数
 * @returns 返回函数执行的结果
 * @example
 * const fn = (a: number, b: number) => a + b;
 * const result = invoke(fn, 1, 2);
 * console.log(result); // 3
 */
// eslint-disable-next-line max-len
export const invoke = <F extends (...args: any[]) => any>(fn: F, ...args: any[]): ReturnType<F> => fn(...args);
