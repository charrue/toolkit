import { isUnDef } from "../../is/index";
import type { IterableKey } from "../type";

export const has = <T = Record<IterableKey, any>>(obj: T, key: IterableKey) => {
  if (isUnDef(obj) || isUnDef(key)) return false;

  return Object.prototype.hasOwnProperty.call(obj, key);
};
