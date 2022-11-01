import { expect, test } from "vitest";
import { isEqual } from "./isEqual";

test("integers, strings and booleans", () => {
  expect(isEqual(10, 10)).toBe(true);
  expect(isEqual(-10.001, -10.001)).toBe(true);
  expect(isEqual(9007199254740991, 9007199254740991)).toBe(true);
  expect(isEqual("foo", "foo")).toBe(true);
  expect(isEqual(false, false)).toBe(true);
});

test("RegExp", () => {
  expect(isEqual(RegExp("obj"), RegExp("obj"))).toBe(true);
});

test("Date", () => {
  expect(isEqual(new Date(), new Date())).toBe(true);
});

test("Map", () => {
  expect(isEqual(new Map([["a", 1], ["b", 2]]), new Map([["a", 1], ["b", 2]]))).toBe(true);
});

test("Set", () => {
  expect(isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))).toBe(true);
});

test("object", () => {
  expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);

  expect(isEqual(
    {
      a: 1,
      b: "2",
      c: false,
      d: new Date(),
      e: RegExp("obj"),
    },
    {
      a: 1,
      b: "2",
      c: false,
      d: new Date(),
      e: RegExp("obj"),
    },
  ))
    .toBe(true);
});

test("array", () => {
  expect(isEqual([1, 2], [1, 2])).toBe(true);
});
