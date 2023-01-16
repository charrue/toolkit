import { describe, test, expect } from "vitest";
import { isDateBefore } from "./index";

describe("isDateBefore", () => {
  test("default", () => {
    expect(isDateBefore(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
    )).toBe(true);

    expect(isDateBefore(
      new Date("2022-10-10 10:10:10:003"),
      new Date("2022-10-10 10:10:10:002"),
    )).toBe(false);
  });

  test("set unit to second", () => {
    expect(isDateBefore(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "second",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2022-10-10 10:10:9:001"),
      new Date("2022-10-10 10:10:10:002"),
      "second",
    )).toBe(true);
  });

  test("set unit to minute", () => {
    expect(isDateBefore(
      new Date("2022-10-10 10:10:9:001"),
      new Date("2022-10-10 10:10:10:002"),
      "minute",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2022-10-10 10:9:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "minute",
    )).toBe(true);
  });

  test("set unit to hour", () => {
    expect(isDateBefore(
      new Date("2022-10-10 10:9:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "hour",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2022-10-10 9:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "hour",
    )).toBe(true);
  });

  test("set unit to day", () => {
    expect(isDateBefore(
      new Date("2022-10-10 9:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "day",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2022-10-9 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "day",
    )).toBe(true);
  });

  test("set unit to month", () => {
    expect(isDateBefore(
      new Date("2022-10-9 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "month",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2022-9-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "month",
    )).toBe(true);
  });

  test("set unit to year", () => {
    expect(isDateBefore(
      new Date("2022-9-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "year",
    )).toBe(false);

    expect(isDateBefore(
      new Date("2021-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:002"),
      "year",
    )).toBe(true);
  });
});
