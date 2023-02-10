import { test, expect, vi } from "vitest";
import { tap } from "./index";

test("tap", () => {
  const fn = vi.fn();
  const result = tap(1, fn);
  expect(result).toBe(1);
});
