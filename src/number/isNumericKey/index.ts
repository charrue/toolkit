const NUMBER = /^\d+$/i;
export const isNumericKey = (key: string) => NUMBER.test(key);
