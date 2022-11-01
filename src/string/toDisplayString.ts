/* eslint-disable no-nested-ternary */
import {
  isStr,
  isArr,
  isObj,
  isFn,
  isMap,
  isSet,
  isPlainObj,
} from "../is/index";

const defaultReplacer = (_key: string, value: any): any => {
  if (isMap(value)) {
    return {
      [`Map(${value.size})`]: [...value.entries()].reduce((entries, [key, val]) => {
        // eslint-disable-next-line no-param-reassign
        (entries as any)[`${key} =>`] = val;
        return entries;
      }, {}),
    };
  }
  if (isSet(value)) {
    return {
      [`Set(${value.size})`]: [...value.values()],
    };
  }
  if (isObj(value) && !isArr(value) && !isPlainObj(value)) {
    return String(value);
  }
  return value;
};

/**
 * convert value to display on the dom
 * @example
 * toDisplayString("foo") // foo
 * toDisplayString(10) // 10
 * toDisplayString({ a: 1 }) // { "a": 1 }
 */
export const toDisplayString = (
  val: unknown,
  replacer: typeof defaultReplacer = defaultReplacer,
): string => (isStr(val)
  ? val
  : val == null
    ? ""
    : isArr(val)
      || (isObj(val)
        && (val.toString === Object.prototype.toString || !isFn(val.toString)))
      ? JSON.stringify(val, replacer, 2)
      : String(val));
