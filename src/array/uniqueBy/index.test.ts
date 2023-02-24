import { test, expect } from "vitest";
import { uniqueBy } from ".";

test("uniqueBy", () => {
  expect(uniqueBy([], (x) => x)).toEqual([]);

  expect(uniqueBy([1, 2, 3, 1, 2, 3], (x) => x)).toEqual([1, 2, 3]);

  expect(uniqueBy([1, 2, 3, 1, 2, 3], (x) => x % 2)).toEqual([1, 2]);

  expect(uniqueBy(
    [
      { id: 1, name: "a" },
      { id: 2, name: "b" },
      { id: 1, name: "c" },
    ],
    (x) => x.id,
  )).toEqual([
    { id: 1, name: "a" },
    { id: 2, name: "b" },
  ]);
});
