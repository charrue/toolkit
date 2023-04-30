const CHINESE_MOBILE_RE = /^1[3456789]\d{9}$/;

export const isChineseMobile = (str: string) => CHINESE_MOBILE_RE.test(str);
