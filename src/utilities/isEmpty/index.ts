import { isArr, isObj, isSet, isMap } from "../../is/index";

export const isEmpty = (value: unknown) => {
  if (value === undefined || value === null) return true;
  if (typeof value === "string") return value.length === 0;
  if (isArr(value)) return value.length === 0;
  if (isObj(value)) return Object.keys(value).length === 0;
  if (isSet(value)) return value.size === 0;
  if (isMap(value)) return value.size === 0;
  return false;
};
