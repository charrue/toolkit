import { test, expect } from "vitest";
import { isInteger } from ".";

test("isInteger", () => {
  expect(isInteger(1)).toBe(true);
  expect(isInteger(1.5)).toBe(false);
  expect(isInteger("1")).toBe(true);
  expect(isInteger("1.5")).toBe(false);
});
