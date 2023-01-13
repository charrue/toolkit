import { test, expect } from "vitest";
import { toPrecision } from "./index";

test("toPrecision", () => {
  expect(toPrecision(Infinity)).toEqual(Infinity);
  expect(toPrecision(-Infinity)).toBe(-Infinity);
  expect(toPrecision(NaN)).toBe(0);
  expect(toPrecision(11)).toBe(11);
  expect(toPrecision(11, 0)).toBe(11);
  expect(toPrecision(11.0, 0)).toBe(11);
  expect(toPrecision(11.1, 0)).toBe(11);
  expect(toPrecision(11.1, 1)).toBe(11.1);
  expect(toPrecision(11.101, 1)).toBe(11.1);
  expect(toPrecision(11.161, 1)).toBe(11.2);
  expect(toPrecision(11.161, 2)).toBe(11.16);
  expect(toPrecision(11.161, 3)).toBe(11.161);
  expect(toPrecision(11.161, 4)).toBe(11.161);
  expect(toPrecision(-11.161, 4)).toBe(-11.161);
  expect(toPrecision("-11.161", 4)).toBe(-11.161);
});
