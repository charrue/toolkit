import { isPlainObj, isArr, getType } from "../../is/index";
import { objectKeys } from "../objectKeys";
import { has } from "../has/index";

const isMergeableObject = (value: any) => isPlainObj(value) || isArr(value);

const mergeArr = (
  target: any,
  source: any,
) => {
  if (!target) return source || [];

  if (isArr(source)) {
    return target.concat(source);
  }

  return target || [];
};

const mergeObj = (target: any, source: any) => {
  if (!isPlainObj(target)) return source || {};

  if (isPlainObj(source)) {
    objectKeys(source).forEach((key) => {
      const sourceValue = source[key];
      if (has(target, key) && isMergeableObject(sourceValue)) {
        target[key] = simpleDeepMerge(target[key] as any, sourceValue);
      } else {
        target[key] = sourceValue;
      }
    });
  }

  return target || {};
};

export const simpleDeepMerge = (
  target: any,
  source: any,
): any => {
  if (source === undefined) return target;

  const sourceType = getType(source);
  const targetType = getType(target);
  const sourceAndTargetTypesMatch = sourceType === targetType;

  if (sourceAndTargetTypesMatch && targetType === "[object Object]") {
    return mergeObj(target, source);
  }
  if (sourceAndTargetTypesMatch && targetType === "[object Array]") {
    return mergeArr(target, source);
  }
  return source;
};
