import { test, expect } from "vitest";
import { simpleUnique } from ".";

test("simpleUnique", () => {
  expect(simpleUnique([])).toEqual([]);
  expect(simpleUnique([1, 2, 3, 1, 2, 3])).toEqual([1, 2, 3]);
});
