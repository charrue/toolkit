import { test, expect } from "vitest";
import { difference } from ".";

test("difference", () => {
  expect(difference([3, 2, 1], [4, 2])).toEqual([3, 1]);

  expect(difference([3, 2, 1], [4, 2], [1, 2])).toEqual([3]);
});
