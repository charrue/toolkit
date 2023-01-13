type Fn = (...rest: any[]) => void;

export const runIfFn = <T>(
  v: T | undefined,
  ...rest: T extends Fn ? Parameters<T> : never
): T extends Fn ? NonNullable<ReturnType<T>> : NonNullable<T> => {
  const res = typeof v === "function" ? v(...rest) : v;
  return res;
};
