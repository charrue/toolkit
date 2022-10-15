import { cacheStringFunction } from "./cacheStringFunction";

const hyphenateRE = /\B([A-Z])/g;

/**
 * Turn a camel-case string into a hyphenated string
 * @example
 * hyphenate("helloWorld") // hello-world
 */
export const hyphenate = cacheStringFunction((str: string) => str.replace(hyphenateRE, "-$1").toLowerCase());
