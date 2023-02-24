/**
 * @description 交换数组中两个元素的位置
 * @returns {T[]}
 */
export function swap<T>(arr: T[], i: number, j: number): T[] {
  if (i < 0) {
    i = arr.length + i;
  }
  if (j < 0) {
    j = arr.length + j;
  }
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  return arr;
}
