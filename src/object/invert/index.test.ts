import { describe, test, expect } from "vitest";
import { invert } from "./index";

describe("invert", () => {
  test("basic usage", () => {
    const obj = { a: 1, b: 2, c: 1 };
    const res = invert(obj);
    expect(res).toEqual({ 1: "c", 2: "b" });
  });

  test("merge", () => {
    const obj = { a: 1, b: 2, c: 1 };
    const res = invert(obj, true);
    expect(res).toEqual({ 1: ["a", "c"], 2: ["b"] });
  });

  test("getSymbol", () => {
    const KEY = Symbol("KEY");
    const obj = { a: 1, [KEY]: 2 };
    const res = invert(obj, false, true);
    expect(res).toEqual({ 1: "a", 2: KEY });
  });
});
