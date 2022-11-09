import { isObj } from "../../is/index";

export const deepSet = (
  object: Record<string, any>,
  keys: string[],
  value: any,
): any => {
  if (!isObj(object)) {
    return object;
  }
  let reference: Record<string, any> = object;

  keys.forEach((key, index) => {
    const isLastElement = index === keys.length - 1;

    if (isLastElement) {
      reference[key] = value;
      return;
    }

    if (!isObj(reference[key])) {
      reference[key] = {};
    }

    reference = reference[key];
  });

  return object;
};
