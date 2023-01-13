import { describe, test, expect } from "vitest";
import { clampNumber } from "./index";

describe("clampNumber", () => {
  test("give a invalid value", () => {
    expect(clampNumber(NaN, 0, 10)).toBe(NaN);
  });

  test("give a value less than min", () => {
    expect(clampNumber(-1, 0, 10)).toBe(0);
  });

  test("give a value greater than max", () => {
    expect(clampNumber(11, 0, 10)).toBe(10);
  });

  test("give a value between min and max", () => {
    expect(clampNumber(5, 0, 10)).toBe(5);
  });

  test("give a value equal to min", () => {
    expect(clampNumber(0, 0, 10)).toBe(0);
  });

  test("give a value equal to max", () => {
    expect(clampNumber(10, 0, 10)).toBe(10);
  });

  test("give a value equal to min and max", () => {
    expect(clampNumber(0, 0, 0)).toBe(0);
  });
});
