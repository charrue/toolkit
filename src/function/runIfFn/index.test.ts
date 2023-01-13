import { test, describe, expect } from "vitest";
import { runIfFn } from "./index";

describe("runIfFn", () => {
  test("is a function", () => {
    expect(runIfFn(() => 11))
      .toBe(11);
  });

  test("is a function with arguments", () => {
    expect(runIfFn((a: number, b: number) => a + b, 1, 2))
      .toBe(3);
  });

  test("is not a function", () => {
    expect(runIfFn(11))
      .toBe(11);
  });
});
