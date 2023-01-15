import { test, expect } from "vitest";
import { and } from "./index";

test("and", () => {
  expect(and(
    true,
    () => 11,
  )).toBe(true);

  expect(and(false, true)).toBe(false);
});
