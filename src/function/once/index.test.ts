import { once } from "./index";
import { test, expect } from "vitest";

test("once", () => {
  let i = 0;
  const add = once((a: number, b: number) => {
    i++;
    return a + b;
  });
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(i).toBe(1);
  expect(add(2, 4)).toBe(3);
  expect(i).toBe(1);
});
