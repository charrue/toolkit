import { test, expect } from "vitest";
import { toNumber } from "./index";

test("toNumber", () => {
  expect(toNumber(NaN)).toBe(0);
  expect(toNumber("11")).toBe(11);
  expect(toNumber("11.11")).toBe(11.11);
  expect(toNumber("11.11.11")).toBe(11.11);

  expect(toNumber(false)).toBe(0);
  expect(toNumber(undefined)).toBe(0);
  expect(toNumber({})).toBe(0);
});
