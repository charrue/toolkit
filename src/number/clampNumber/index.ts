import { isNullishOrNan } from "../../is/index";

export const clampNumber = (value: number, min: number, max: number) => {
  if (isNullishOrNan(value)) return value;

  min = Math.min(min, max);
  max = Math.max(min, max);

  return Math.min(Math.max(value, min), max);
};
