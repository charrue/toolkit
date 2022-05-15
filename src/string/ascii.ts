export const CONTROL_CODE_FIRST = 0
export const CONTROL_CODE_LAST = 31
export const PRINTABLE_CODE_FIRST = 32
export const PRINTABLE_CODE_LAST = 126

/**
 * ASCII的数字字符的起始位置 48
 */
export const DIGIT_CODE_FIRST = 48
/**
 * ASCII的数字字符的结束位置 57
 */
export const DIGIT_CODE_LAST = 57
/**
 * ASCII的大写字母字符的起始位置 65
 */
export const UPPERCASE_CODE_FIRST = 65
/**
 * ASCII的大写字母字符的结束位置 90
 */
export const UPPERCASE_CODE_LAST = 90
/**
 * ASCII的小写字母字符的开始位置 97
 */
export const LOWERCASE_CODE_FIRST = 97
/**
 * ASCII的小写字母字符的结束位置 122
 */
export const LOWERCASE_CODE_LAST = 122
/**
 * ASCII的空格字符的位置 32
 */
export const SPACE_CODE = 32
/**
 * ASCII的回车字符的位置 13
 */
export const ENTER_CODE = 13
/**
 * ASCII的tab字符的位置 9
 */
export const TAB_CODE = 9

const detectASCIICode = (key: string | number, start: number, end: number) => {
  let code = key;
  if (typeof code === "string") {
    if (code.length > 1) {
      console.warn(`[charrue toolkit] ${code} should a single character`);
    }

    code = code.charCodeAt(0);
  }
  return code >= start && code <= end
}


/**
 * @description 判断ASCII字符或Unicode码点是否是控制字符
 * @param key - ASCII字符或Unicode 码点
 */
export const isControlCode = (key: number | string) => {
  return detectASCIICode(key, CONTROL_CODE_FIRST, CONTROL_CODE_LAST)
}

/**
 * @description
 * 判断ASCII字符或Unicode码点是否是可打印字符
 *
 * 可打印字符包括 字母、数字、标点符号和一些杂项符号。
 * @param key - ASCII字符或Unicode 码点
 */
export const isPrintableCode = (key: number | string) => {
  return detectASCIICode(key, PRINTABLE_CODE_FIRST, PRINTABLE_CODE_LAST)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是数字
 * @param key - ASCII字符或Unicode 码点
 */
export const isDigitCode = (key: number | string) => {
  return detectASCIICode(key, DIGIT_CODE_FIRST, DIGIT_CODE_LAST)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是大写字母
 * @param key - ASCII字符或Unicode 码点
 */
export const isUpperCaseCode = (key: number | string) => {
  return detectASCIICode(key, UPPERCASE_CODE_FIRST, UPPERCASE_CODE_LAST)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是小写字母
 * @param key - ASCII字符或Unicode 码点
 */
export const isLowerCaseCode = (key: number | string) => {
  return detectASCIICode(key, LOWERCASE_CODE_FIRST, LOWERCASE_CODE_LAST)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是空白节点
 * @param key - ASCII字符或Unicode 码点
 */
export const isWhiteSpaceCode = (key: number | string) => {
  let code = key;
  if (typeof code === "string") {
    code = code.charCodeAt(0);
  }

  return code === TAB_CODE || code === ENTER_CODE || code === SPACE_CODE;
}

/**
 * @description 判断ASCII字符或Unicode码点是否是字母
 * @param key - ASCII字符或Unicode 码点
 */
export const isLetterCode = (key: number | string) => {
  return isUpperCaseCode(key) || isLowerCaseCode(key)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是标点符号
 * @param key - ASCII字符或Unicode 码点
 */
export const isPunctuation = (key: number | string) => {
  return isPrintableCode(key)
      && !isDigitCode(key)
      && !isLetterCode(key)
}

/**
 * @description 判断ASCII字符或Unicode码点是否是数字或字母
 * @param key - ASCII字符或Unicode 码点
 */
export const isAlphanumeric = (key: number | string) => {
  return isLetterCode(key) || isDigitCode(key)
}
