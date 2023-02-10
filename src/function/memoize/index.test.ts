import { test, expect, vi } from "vitest";
import { memoize } from "./index";

test("memoize", () => {
  const fn = vi.fn((a: number, b: number) => a + b);
  const memoized = memoize(fn);
  const result = memoized(1, 2);
  expect(result).toBe(3);
  expect(fn).toBeCalledWith(1, 2);
  expect(fn).toBeCalledTimes(1);
  const result2 = memoized(1, 2);
  expect(result2).toBe(3);
  expect(fn).toBeCalledTimes(1);
  const result3 = memoized(2, 2);
  expect(result3).toBe(4);
  expect(fn).toBeCalledTimes(2);
});

test("memoize.reset", () => {
  const fn = vi.fn((a: number, b: number) => a + b);
  const memoized = memoize(fn);
  const result = memoized(1, 2);
  expect(result).toBe(3);
  expect(fn).toBeCalledWith(1, 2);
  expect(fn).toBeCalledTimes(1);
  memoized.reset();
  const result2 = memoized(1, 2);
  expect(result2).toBe(3);
  expect(fn).toBeCalledTimes(2);
});

test("set isEqual", () => {
  const fn = vi.fn((a: number, b: number) => a + b);
  const memoized = memoize(fn, (a, b) => a[0] === b[0]);
  const result = memoized(1, 2);
  expect(result).toBe(3);
  expect(fn).toBeCalledWith(1, 2);
  expect(fn).toBeCalledTimes(1);
  const result2 = memoized(1, 2);
  expect(result2).toBe(3);
  expect(fn).toBeCalledTimes(1);
  const result3 = memoized(2, 2);
  expect(result3).toBe(4);
  expect(fn).toBeCalledTimes(2);
});
