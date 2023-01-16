import { expect, test } from "vitest";
import { isLeapYear } from "./index";

test("isLeapYear", () => {
  expect(isLeapYear(2020)).toBe(true);
  expect(isLeapYear(2021)).toBe(false);
});
