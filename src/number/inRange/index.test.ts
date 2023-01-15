import { test, expect } from "vitest";
import { inRange } from "./index";

test("inRange", () => {
  expect(inRange(10, 0, 100)).toBe(true);
  expect(inRange(10, 10, 10)).toBe(true);
  expect(inRange(10, 20, 10)).toBe(true);
  expect(inRange(10, 20, 60)).toBe(false);
});
