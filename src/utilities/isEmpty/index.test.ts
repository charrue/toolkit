import { test, expect } from "vitest";
import { isEmpty } from "./index";

test("isEmpty", () => {
  expect(isEmpty("")).toBe(true);
  expect(isEmpty(" ")).toBe(false);
  expect(isEmpty("foo")).toBe(false);
  expect(isEmpty(1)).toBe(false);
  expect(isEmpty(true)).toBe(false);
  expect(isEmpty(false)).toBe(false);
  expect(isEmpty(null)).toBe(true);
  expect(isEmpty(undefined)).toBe(true);
  expect(isEmpty({})).toBe(true);
  expect(isEmpty({ a: 1 })).toBe(false);
  expect(isEmpty([])).toBe(true);
  expect(isEmpty([1])).toBe(false);
  expect(isEmpty(new Set())).toBe(true);
  expect(isEmpty(new Set([1]))).toBe(false);
  expect(isEmpty(new Map())).toBe(true);
  expect(isEmpty(new Map([["a", 1]]))).toBe(false);
});
