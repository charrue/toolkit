import { isPromise } from "../../is/index";

export const toPromise = <T>(maybePromise: Promise<T> | T): Promise<T> => {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
};
