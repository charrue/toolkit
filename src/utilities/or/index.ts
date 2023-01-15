import { runIfFn } from "../../function/runIfFn/index";

export const or = (...args: any[]) => args.some((arg) => Boolean(runIfFn(arg)));
