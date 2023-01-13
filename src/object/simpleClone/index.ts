import { isPlainObj } from "../../is/index";
import { objectMap } from "../objectMap";

export function simpleClone<T>(input: T): T {
  if (Array.isArray(input)) {
    return input.map((item) => simpleClone(item)) as T;
  }

  if (isPlainObj(input)) {
    return objectMap(input, (key, string) => {
      return {
        [key]: simpleClone(string),
      };
    }) as T;
  }

  return input;
}
