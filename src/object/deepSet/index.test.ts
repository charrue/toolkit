import { test, expect } from "vitest";
import { deepSet } from "./index";

test("deepSet", () => {
  expect(deepSet({}, ["a"], 1)).toEqual({ a: 1 });
  expect(deepSet({ a: 1 }, ["b", "c"], [2])).toEqual({
    a: 1,
    b: {
      c: [2],
    },
  });
  expect(deepSet({ a: 1 }, ["b", "c"], { d: [2] })).toEqual({
    a: 1,
    b: {
      c: {
        d: [2],
      },
    },
  });
});
