const EMAIL_RE = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

/**
 * @description - 判断是否为邮箱
 * @example
 * ```ts
 * isEmail("12345678910"); // => false
 * isEmail("abc@gmail.com"); // => true
 * ```
 */
export const isEmail = (str: string) => EMAIL_RE.test(str);
