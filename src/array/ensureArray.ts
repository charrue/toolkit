export const ensureArray = <T>(val: T | T[]): T[] => (Array.isArray(val) ? val : [val]);
