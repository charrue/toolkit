export const addCommas = (num: number, delimiter = ","): string => {
  if (typeof num !== "number") return num;

  const str = `${num}`;
  const x = str.split(".");
  let integer = x[0];
  const decimals = x.length > 1 ? `.${x[1]}` : "";
  const pattern = /(\d+)(\d{3})/;
  while (pattern.test(integer)) {
    integer = integer.replace(pattern, `$1${delimiter}$2`);
  }
  return integer + decimals;
};
