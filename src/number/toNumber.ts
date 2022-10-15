export const toNumber = (val: any): any => {
  const n = parseFloat(val);
  return Number.isNaN(n) ? val : n;
};
