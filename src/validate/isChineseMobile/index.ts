const CHINESE_MOBILE_RE = /^1[3456789]\d{9}$/;

/**
 * @description - 判断是否为中国大陆手机号
 * @example
 * ```ts
 * isChineseMobile("12345678910"); // => false
 * isChineseMobile("14720947128"); // => true
 * ```
 */
export const isChineseMobile = (str: string) => CHINESE_MOBILE_RE.test(str);
