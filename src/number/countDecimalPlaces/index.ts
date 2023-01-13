// fork from https://github.com/chakra-ui/chakra-ui/blob/main/packages/utilities/number-utils/src/index.ts

export const countDecimalPlaces = (value: number) => {
  if (!Number.isFinite(value)) return 0;

  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }
  return p;
};
