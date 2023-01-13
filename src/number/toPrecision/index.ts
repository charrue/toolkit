import { toNumber } from "../toNumber";

export const toPrecision = (value: number | `${number}`, precision = 0) => {
  let nextValue = toNumber(value);
  if (nextValue === Infinity || nextValue === -Infinity) {
    return nextValue;
  }

  const scaleFactor = 10 ** precision;
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return toNumber(precision ? nextValue.toFixed(precision) : nextValue.toString());
};
