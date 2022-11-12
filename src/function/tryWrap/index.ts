import { isFn, isPromise } from "../../is/index";
// eslint-disable-next-line max-len
export const tryWrap = <T extends (...args: any[]) => any>(fn: T, onError?: (e: Error) => void) => (...args: Parameters<T>): ReturnType<T> | undefined => {
  const handleError = (e: unknown) => {
    if (isFn(onError)) {
      onError(e);
    } else {
      console.error(e);
    }
  };

  try {
    const res = fn(...args);
    if (isPromise(res)) {
      return res
        .then((r) => r)
        .catch((e) => {
          handleError(e);
          return undefined;
        }) as unknown as ReturnType<T> | undefined;
    }
    return res;
  } catch (e) {
    handleError(e);
    return undefined;
  }
};
