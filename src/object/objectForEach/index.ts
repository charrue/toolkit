import { IterableKey } from "../type";
import { objectKeys } from "../objectKeys/index";

type ObjectForEachIterator<K extends IterableKey = string> = (key: K, value: any) => void;

export function objectForEach<K extends IterableKey = string, B extends boolean = false>(
  obj: Record<B extends true ? K : string, any>,
  fn: ObjectForEachIterator<K>,
  getSymbol?: B,
): void {
  const keys = objectKeys(obj, getSymbol);
  keys.forEach((key) => {
    fn(key as K, obj[key as B extends true ? K : string]);
  });
}
