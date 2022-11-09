import { test, expect } from "vitest";
import { randomInt } from "./index";

test("randomInt(max)", () => {
  expect(randomInt(1000)).lessThan(1000);
});

test("getRandomInt(max, min)", () => {
  expect(randomInt(100, 10)).lessThanOrEqual(100);
  expect(randomInt(100, 10)).greaterThanOrEqual(10);
});
