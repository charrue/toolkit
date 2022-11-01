import { isUnDef } from "../is/index";
import { has } from "./has";

const cloneRegExp = (reg: RegExp) => {
  const pattern = reg.source;
  let flags = "";

  const injectFlags = "";
  if (reg.global || /g/i.test(injectFlags)) {
    flags += "g";
  }

  if (reg.ignoreCase || /i/i.test(injectFlags)) {
    flags += "i";
  }

  if (reg.multiline || /m/i.test(injectFlags)) {
    flags += "m";
  }

  return new RegExp(pattern, flags);
};

/**
 * 深度拷贝
 * @param raw - 要深拷贝的值
 * @from https://github.com/davidmarkclements/rfdc
 * @returns 深拷贝后的值
 */
export const deepClone = <K>(obj: K): K => {
  const refs: any[] = [];
  const refsNew: any[] = [];

  const baseCloneArray = <T>(arr: T[]): T[] => arr.map((val) => {
    if (typeof val !== "object" || isUnDef(val)) {
      return val;
    }
    if (val instanceof Date) {
      return new Date(val);
    }
    // 如果是循环引用
    const index = refs.indexOf(val);
    if (index !== -1) {
      return val;
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return baseClone(val);
  }) as T[];

  // eslint-disable-next-line max-statements
  const baseClone = <T>(raw: T, proto = false): any => {
    if (typeof raw !== "object" || isUnDef(raw)) return raw;

    if (raw instanceof Date) return new Date(raw);

    if (Array.isArray(raw)) return baseCloneArray(raw);

    if (raw instanceof Map) {
      return new Map(baseClone(Array.from(raw)));
    }

    if (raw instanceof WeakMap) {
      return new WeakMap(baseClone(Array.from<any>(raw as any)));
    }

    if (raw instanceof Set) {
      return new Set(baseClone(Array.from(raw)));
    }

    if (raw instanceof WeakSet) {
      return new WeakSet(baseClone(Array.from<any>(raw as any)));
    }

    if (raw instanceof RegExp) {
      return cloneRegExp(raw);
    }

    const result: Record<string, any> = {};
    refs.push(raw);
    refsNew.push(result);
    for (const k in raw) {
      if (proto) {
        if (!has(raw, k)) {
          // eslint-disable-next-line no-continue
          continue;
        }
      }

      const cur = raw[k];
      if (typeof cur !== "object" || isUnDef(cur)) {
        result[k] = cur;
      } else if (cur instanceof Date) {
        result[k] = new Date(cur);
      } else if (cur instanceof Map) {
        result[k] = new Map(baseClone(cur));
      } else if (cur instanceof WeakMap) {
        result[k] = new WeakMap(baseClone(Array.from<any>(raw as any)));
      } else if (cur instanceof Set) {
        result[k] = new Set(baseClone(cur));
      } else if (cur instanceof WeakSet) {
        result[k] = new WeakSet(baseClone(Array.from<any>(raw as any)));
      } else if (cur instanceof RegExp) {
        result[k] = cloneRegExp(cur);
      } else {
        // 如果是循环引用
        const index = refs.indexOf(cur);
        if (index !== -1) {
          result[k] = cur;
        } else {
          result[k] = baseClone(cur);
        }
      }
    }

    refs.pop();
    refsNew.pop();

    return result;
  };

  return baseClone(obj);
};
