import { cacheStringFunction } from "./cacheStringFunction";

const camelizeRE = /-(\w)/g;

/**
 * Turn a hyphenated string into a camel-case string
 * @example
 * camelize("hello-world") // helloWOrld
 */
export const camelize = cacheStringFunction((str: string): string => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : "")));
