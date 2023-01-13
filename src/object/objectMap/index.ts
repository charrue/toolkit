import { IterableKey } from "../type";
import { objectKeys } from "../objectKeys/index";
import { isNullish } from "../../is";
import { cast } from "../../utilities";

// eslint-disable-next-line max-len
type ObjectMapIterator<K extends IterableKey = string> = (key: K, value: any) => Record<IterableKey, any> | undefined;

export function objectMap<K extends IterableKey = string, B extends boolean = false>(
  obj: Record<B extends true ? K : string, any>,
  fn: ObjectMapIterator<K>,
  getSymbol?: B,
): Record<B extends true ? K : string, any> {
  const keys = objectKeys(obj, getSymbol);
  const output = cast<Record<B extends true ? K : string, any>>({});
  for (const key of keys) {
    const result = fn(key as K, obj[key as B extends true ? K : string]);
    if (!isNullish(result)) {
      Object.assign(output, result);
    }
  }
  return output;
}
