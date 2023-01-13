import type { IterableKey } from "../type";
import { has } from "../has/index";

export function pick(
  data: Record<IterableKey, any>,
  keys: IterableKey[] = [],
  getDefaultValue?: (key: IterableKey) => unknown,
) {
  const result: Record<IterableKey, any> = {};
  if (!Array.isArray(keys)) return result;

  keys.forEach((key) => {
    if (has(data, key)) {
      result[key] = data[key];
    } else if (typeof getDefaultValue === "function") {
      result[key] = getDefaultValue(key);
    }
  });
  return result;
}
