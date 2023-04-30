const EMAIL_RE = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

export const isEmail = (str: string) => EMAIL_RE.test(str);
