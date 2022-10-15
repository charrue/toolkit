export const cacheStringFunction = <T extends (str: string) => string>(fn: T): T => {
  const cache: Record<string, string> = Object.create(null);
  return ((str: string) => {
    const hit = cache[str];
    if (hit) {
      return hit;
    }
    cache[str] = fn(str);
    return cache[str];
  }) as T;
};
