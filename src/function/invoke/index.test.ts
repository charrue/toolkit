import { test, expect, vi } from "vitest";
import { invoke } from "./index";

test("invoke", () => {
  const fn = vi.fn((a: number, b: number) => a + b);
  const result = invoke(fn, 1, 2);
  expect(result).toBe(3);
  expect(fn).toBeCalledWith(1, 2);
});
