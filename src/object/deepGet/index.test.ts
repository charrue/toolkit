import { test, expect } from "vitest";
import { deepGet } from "./index";

test("deepGet", () => {
  expect(deepGet({}, [])).toEqual({});
  expect(deepGet({}, [""])).toBe(undefined);
  expect(deepGet({ a: 1 }, ["a"])).toBe(1);
  expect(deepGet({ a: { b: { c: [1] } } }, ["a", "b", "c"])).toEqual([1]);
  expect(deepGet({ a: { b: { c: [1] } } }, ["a", "b", "c", 0])).toBe(1);
});
