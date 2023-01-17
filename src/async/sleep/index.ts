import type { Fn } from "../../typeDef";

export function sleep(ms: number, callback?: Fn<any>) {
  return new Promise<void>((resolve) => setTimeout(async () => {
    await callback?.();
    resolve();
  }, ms));
}
