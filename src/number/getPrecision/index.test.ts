import { test, expect } from "vitest";
import { getPrecision } from "./index";

test("getPrecision", () => {
  expect(getPrecision(Infinity)).toBe(0);
  expect(getPrecision(-Infinity)).toBe(0);
  expect(getPrecision(NaN)).toBe(0);
  expect(getPrecision(11)).toBe(0);
  expect(getPrecision(11.0)).toBe(0);
  expect(getPrecision(11.1)).toBe(1);
  expect(getPrecision(11.110)).toBe(2);
  expect(getPrecision(11.101)).toBe(3);
  expect(getPrecision(1e-11)).toBe(11);
  expect(getPrecision(1e+21)).toBe(21);
});
