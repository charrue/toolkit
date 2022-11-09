/**
 * Get length after decimal point.
 * @param value
 */
export function getPrecision(value: number): number {
  if (typeof value !== "number") return value;

  const str = `${value}`;
  const index = ["e-", "e+"].map((k) => str.indexOf(k)).filter((v) => v !== -1);

  if (index.length > 0) {
    return parseInt(str.slice(index[0] + 2), 10);
  }

  return str.split(".")[1]?.length || 0;
}
