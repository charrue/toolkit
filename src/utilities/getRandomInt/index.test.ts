import { test, expect } from "vitest";
import { getRandomInt } from "./index";

test("getRandomInt(max)", () => {
  expect(getRandomInt(1000)).lessThan(1000);
});

test("getRandomInt(max, min)", () => {
  expect(getRandomInt(100, 10)).lessThanOrEqual(100);
  expect(getRandomInt(100, 10)).greaterThanOrEqual(10);
});
