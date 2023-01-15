import { test, expect } from "vitest";
import { or } from "./index";

test("and", () => {
  expect(or(
    true,
    () => 11,
  )).toBe(true);

  expect(or(false, true)).toBe(true);

  expect(or(false, false)).toBe(false);
});
