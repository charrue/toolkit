import { describe, test, expect } from "vitest";
import { swap } from "./index";

describe("swap", () => {
  test("basic usage", () => {
    const arr = [1, 2, 3];
    expect(swap(arr, 0, 2)).toEqual([3, 2, 1]);
  });

  test("negative index", () => {
    const arr = [1, 2, 3];
    expect(swap(arr, -1, -2)).toEqual([1, 3, 2]);
  });
});
