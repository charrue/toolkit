import { cacheStringFunction } from "./cacheStringFunction";

/**
 * Capitalize the first letter of a string
 * @example
 * capitalize("hello world") // Hello world
 */
// eslint-disable-next-line max-len
export const capitalize = cacheStringFunction((str: string) => str.charAt(0).toUpperCase() + str.slice(1));
