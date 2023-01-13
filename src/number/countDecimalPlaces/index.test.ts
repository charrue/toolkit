import { test, expect } from "vitest";
import { countDecimalPlaces } from "./index";

test("countDecimalPlaces", () => {
  expect(countDecimalPlaces(Infinity)).toBe(0);
  expect(countDecimalPlaces(-Infinity)).toBe(0);
  expect(countDecimalPlaces(NaN)).toBe(0);
  expect(countDecimalPlaces(11)).toBe(0);
  expect(countDecimalPlaces(11.0)).toBe(0);
  expect(countDecimalPlaces(11.1)).toBe(1);
  expect(countDecimalPlaces(11.110)).toBe(2);
  expect(countDecimalPlaces(11.101)).toBe(3);
  expect(countDecimalPlaces(1e-11)).toBe(11);
  expect(countDecimalPlaces(1e+10)).toBe(0);
});
