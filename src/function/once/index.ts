export const once = <T extends (...args: any[]) => any>(fn?: T | null) => {
  let result: any;

  return function func(this: any, ...args: Parameters<T>) {
    if (fn) {
      result = fn.apply(this, args);
      fn = null;
    }

    return result;
  };
};
