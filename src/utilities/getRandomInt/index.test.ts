import { test, expect } from "vitest";
import { getRandomInt } from "./index";

test("getRandomInt", () => {
  expect(getRandomInt(1000)).lessThan(1000);
});
