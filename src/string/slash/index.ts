/**
 * @description 将反斜杠路径转换为正斜杠路径
 * @example
 * ```ts
 * slash("a\\b\\c");
 * // => 'a/b/c'
 * ```
 */
export default function slash(p: string) {
  const isExtendedLengthPath = /^\\\\\?\\/.test(p);

  if (isExtendedLengthPath) {
    return p;
  }

  return p.replace(/\\/g, "/");
}
