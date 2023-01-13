import { isUnDef, isPlainObj, isArr, isNum } from "../../is/index";
import type { IterableKey } from "../type";
import { has } from "../has/index";

export const hasPath = (obj: Record<IterableKey, any>, keys: IterableKey[]) => {
  if (isUnDef(obj) || keys.length === 0) return false;

  let index = 0;
  let val: any = obj;
  while (index < keys.length) {
    const key = keys[index];
    if (isPlainObj(val) && has(val, key)) {
      val = val[key];
      index += 1;
    } else if (isArr(val) && isNum(key) && key > 0 && key < val.length) {
      val = val[key];
      index += 1;
    } else {
      return false;
    }
  }
  return true;
};
