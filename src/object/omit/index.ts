import type { IterableKey } from "../type";
import { has } from "../has/index";

export function omit(data: Record<IterableKey, any>, keys: IterableKey[] = []) {
  const result = {
    ...data,
  };

  keys.forEach((key) => {
    if (has(data, key)) {
      delete result[key];
    }
  });
  return result;
}
