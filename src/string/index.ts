export * from "./ascii";
export * from "./parseQueryString"

/**
 * @description 如果字符串的长度小于指定的长度，那么在字符串的前面补充指定的字符串，直到字符串的长度达到指定的长度
 * @param { string } str - 需要处理的字符串
 * @param { number } len - 字符串期望的长度
 * @param { string } padStr - 补充的字符
 * @returns { string } 补充后的字符串
 */
export const padStart = (string: string, length: number, pad = "0") => {
  const s = `${string}`;
  if (!s || s.length >= length) return string;
  const padChar = pad.length <= 1 ? pad : pad.charAt(0);
  return `${Array((length + 1) - s.length).join(padChar)}${string}`;
};

/**
 * @description 如果字符串的长度小于指定的长度，那么在字符串的后面补充指定的字符串，直到字符串的长度达到指定的长度
 * @param { string } str - 需要处理的字符串
 * @param { number } len - 字符串期望的长度
 * @param { string } padStr - 补充的字符
 * @returns { string } 补充后的字符串
 */
export const padEnd = (string: string, length: number, pad = "0") => {
  const s = `${string}`;
  if (!s || s.length >= length) return string;

  const padChar = pad.length <= 1 ? pad : pad.charAt(0);
  return `${string}${Array((length + 1) - s.length).join(padChar)}`;
};

/**
 * @description 字符串的第一个字符转换为大写
 * @param { string } str - 需要处理的字符串
 * @returns { string } 处理后的字符串
 */
export const upperFirst = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * @description 字符串的第index个字符转换为大写
 * @param { string } str - 需要处理的字符串
 * @param { number } index - 字符串的第index个字符
 * @returns { string } 处理后的字符串
 */
export const upperAt = (str: string, index: number) => {
  if (index >= str.length) return str;

  if (index === 0) return upperFirst(str);

  const newIndex = index < 0 ? str.length + index : index;
  return str.slice(0, newIndex) + upperFirst(str.slice(newIndex));
};

/**
 * @description 字符串的第一个字符转换为小写
 * @param { string } str - 需要处理的字符串
 * @returns { string } 处理后的字符串
 */
export const lowerFirst = (str: string) => str.charAt(0).toLowerCase() + str.slice(1);

/**
 * @description 字符串的第index个字符转换为小写
 * @param { string } str - 需要处理的字符串
 * @param { number } index - 字符串的第index个字符
 */
export const lowerAt = (str: string, index: number) => {
  if (index >= str.length) return str;

  if (index === 0) return lowerFirst(str);

  const newIndex = index < 0 ? str.length + index : index;
  return str.slice(0, newIndex) + lowerFirst(str.slice(newIndex));
};
