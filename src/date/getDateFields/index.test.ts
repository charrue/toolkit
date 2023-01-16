import { test, expect } from "vitest";
import { getDateFields } from "./index";

test("getDateFields", () => {
  expect(getDateFields(new Date("2022-10-10 10:10:10:001"))).toEqual({
    year: 2022,
    month: 10,
    day: 10,
    hour: 10,
    minute: 10,
    second: 10,
    millisecond: 1,
  });
});
