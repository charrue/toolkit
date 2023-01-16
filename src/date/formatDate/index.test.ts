import { describe, test, expect } from "vitest";
import { formatDate } from "./index";

// eslint-disable-next-line max-statements
describe("formatDate", () => {
  const date1 = new Date("2022-12-31 23:59:59:999");
  const date2 = new Date("2023-1-1 00:00:00");

  test("default", () => {
    expect(formatDate(date1))
      .toBe("2022-12-31");
    expect(formatDate(date2))
      .toBe("2023-01-01");
  });

  test("YY", () => {
    expect(formatDate(date1, "YY"))
      .toBe("22");
  });

  test("YYYY", () => {
    expect(formatDate(date1, "YYYY"))
      .toBe("2022");
  });

  test("MM", () => {
    expect(formatDate(date1, "MM"))
      .toBe("12");
    expect(formatDate(date2, "MM")).toBe("01");
  });

  test("M", () => {
    expect(formatDate(date1, "M"))
      .toBe("12");
    expect(formatDate(date2, "M"))
      .toBe("1");
  });

  test("MMMM", () => {
    expect(formatDate(date1, "MMMM"))
      .toBe("十二月");
    expect(formatDate(date2, "MMMM"))
      .toBe("一月");
  });

  test("D", () => {
    expect(formatDate(date1, "D"))
      .toBe("31");

    expect(formatDate(date2, "D")).toBe("1");
  });

  test("DD", () => {
    expect(formatDate(date1, "DD"))
      .toBe("31");

    expect(formatDate(date2, "DD")).toBe("01");
  });

  test("d", () => {
    expect(formatDate(date1, "d"))
      .toBe("6");

    expect(formatDate(date2, "d"))
      .toBe("0");
  });

  test("dddd", () => {
    expect(formatDate(date1, "dddd"))
      .toBe("星期六");

    expect(formatDate(date2, "dddd"))
      .toBe("星期日");
  });

  test("H", () => {
    expect(formatDate(date1, "H"))
      .toBe("23");
    expect(formatDate(date2, "H"))
      .toBe("0");
  });

  test("HH", () => {
    expect(formatDate(date1, "HH"))
      .toBe("23");
    expect(formatDate(date2, "HH"))
      .toBe("00");
  });

  test("h", () => {
    expect(formatDate(date1, "h"))
      .toBe("11");
    expect(formatDate(date2, "h"))
      .toBe("0");
  });

  test("hh", () => {
    expect(formatDate(date1, "hh"))
      .toBe("11");
    expect(formatDate(date2, "hh"))
      .toBe("00");
  });

  test("a", () => {
    expect(formatDate(date1, "a"))
      .toBe("pm");
    expect(formatDate(date2, "a"))
      .toBe("am");
  });

  test("A", () => {
    expect(formatDate(date1, "A"))
      .toBe("PM");
    expect(formatDate(date2, "A"))
      .toBe("AM");
  });

  test("m", () => {
    expect(formatDate(date1, "m"))
      .toBe("59");
    expect(formatDate(date2, "m"))
      .toBe("0");
  });

  test("mm", () => {
    expect(formatDate(date1, "mm"))
      .toBe("59");
    expect(formatDate(date2, "mm"))
      .toBe("00");
  });

  test("s", () => {
    expect(formatDate(date1, "s"))
      .toBe("59");
    expect(formatDate(date2, "s"))
      .toBe("0");
  });

  test("ss", () => {
    expect(formatDate(date1, "ss"))
      .toBe("59");
    expect(formatDate(date2, "ss"))
      .toBe("00");
  });

  test("SSS", () => {
    expect(formatDate(date1, "SSS"))
      .toBe("999");
    expect(formatDate(date2, "SSS"))
      .toBe("000");
  });
});
