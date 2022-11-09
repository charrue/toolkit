export function toPrecision(num: number, precision = 0) {
  if (typeof num !== "number") return num;

  const ratio = 10 ** Number(precision.toFixed(0));
  return parseFloat(`${Math.round(num * ratio) / ratio}`);
}
