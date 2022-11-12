import { test, expect } from "vitest";
import { isNumericKey } from "./index";

test("isNumericKey", () => {
  expect(isNumericKey("")).toBe(false);
  expect(isNumericKey("1 2 3")).toBe(false);
  expect(isNumericKey(" 123 ")).toBe(false);
  expect(isNumericKey("123abc")).toBe(false);
  expect(isNumericKey("0")).toBe(true);
  expect(isNumericKey("123")).toBe(true);
});
