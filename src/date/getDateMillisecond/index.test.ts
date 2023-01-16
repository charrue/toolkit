import { describe, expect, test } from "vitest";
import { getDateMillisecond } from "./index";
import { parseMillisecond } from "../parseMillisecond/index";

describe("getDateMillisecond", () => {
  test("default", () => {
    const t = getDateMillisecond(new Date("2022-10-10 10:10:10:001"));
    const { years, months, days, hours, minutes, seconds, milliseconds } = parseMillisecond(t, {
      week: false,
    });
    expect(years).toBe(2022);
    expect(months).toBe(10);
    expect(days).toBe(10);
    expect(hours).toBe(10);
    expect(minutes).toBe(10);
    expect(seconds).toBe(10);
    expect(milliseconds).toBe(1);
  });

  test("set unit", () => {
    const t = getDateMillisecond(new Date("2022-10-10 10:10:10:001"), "day");
    const { years, months, days, hours, minutes, seconds, milliseconds } = parseMillisecond(t, {
      week: false,
    });
    expect(years).toBe(2022);
    expect(months).toBe(10);
    expect(days).toBe(10);
    expect(hours).toBe(0);
    expect(minutes).toBe(0);
    expect(seconds).toBe(0);
    expect(milliseconds).toBe(0);
  });
});
