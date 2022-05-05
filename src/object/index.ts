import cloneDeep from "lodash.clonedeep";
import _merge from "lodash.merge"
import _mergeWith from "lodash.mergewith"

type PlainObject = Record<string, any>

/**
 * 判断object是否具有key属性
 * @param { Object } object 需要判断的对象
 * @param { string } key 键名
 */
export function hasIn(object: PlainObject, key: string): boolean {
  return object != null && key in Object(object);
}

/**
 * 创建一个从 object 中选中一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 选出的属性
 */
export function pick(data: PlainObject, attrs: string[] = []) {
  const result: PlainObject = {};
  attrs.forEach((attr) => {
    if (typeof data[attr] !== "undefined") {
      result[attr] = data[attr];
    }
  });
  return result;
}

/**
 * 创建一个从 object 中排除一些的属性的对象
 * @param { Array } data 来源对象
 * @param { Array } attrs 排除的属性
 */
export function omit(data: PlainObject, attrs: string[] = []) {
  const result = {
    ...data,
  };
  attrs.forEach((attr) => {
    delete result[attr];
  });
  return result;
}


/**
 * 深度拷贝
 * @param raw - 要深拷贝的值
 * @returns 深拷贝后的值
 */
export function deepClone(raw: any) {
  return cloneDeep(raw);
}
export const merge = _merge
export const mergeWith = _mergeWith