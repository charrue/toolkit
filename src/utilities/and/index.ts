import { runIfFn } from "../../function/runIfFn/index";

export const and = (...args: any[]) => args.every((arg) => Boolean(runIfFn(arg)));
