/**
 * @description 判断是否为整数
 * @param {string | number} val
 * @returns {boolean} true | false
 * @example
 * isInteger(1); // true
 * isInteger(1.5); // false
 * isInteger("1"); // true
 * isInteger("1.5"); // false
 */
export function isInteger(val: string | number): boolean {
  if (typeof val === "number") {
    return Math.floor(val) === val;
  }
  return String(Math.floor(Number(val))) === val;
}
