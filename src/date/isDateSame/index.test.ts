import { test, expect, describe } from "vitest";
import { isDateSame } from "./index";

describe("isDateSame", () => {
  test("millisecond", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:011"),
    )).toBe(false);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:001"),
    )).toBe(true);
  });

  test("second", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:011"),
      "second",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:09:001"),
      "second",
    )).toBe(false);
  });

  test("minute", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:011"),
      "minute",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:09:10:001"),
      "minute",
    )).toBe(false);
  });

  test("hour", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:00:00"),
      new Date("2022-10-10 10:10:10:011"),
      "hour",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:00:00"),
      new Date("2022-10-10 09:10:10:001"),
      "hour",
    )).toBe(false);
  });

  test("day", () => {
    expect(isDateSame(
      new Date("2022-10-10 09:09:09:009"),
      new Date("2022-10-10 10:10:10:011"),
      "day",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-09 10:10:10:001"),
      "day",
    )).toBe(false);
  });

  test("month", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:011"),
      "month",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-09-10 10:10:10:001"),
      "month",
    )).toBe(false);
  });

  test("year", () => {
    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2022-10-10 10:10:10:011"),
      "year",
    )).toBe(true);

    expect(isDateSame(
      new Date("2022-10-10 10:10:10:001"),
      new Date("2021-10-10 10:10:10:001"),
      "year",
    )).toBe(false);
  });
});
