import { describe, test, expect } from "vitest";
import { endOfWeek } from "./index";

describe("endOfWeek", () => {
  test("default", () => {
    expect(endOfWeek(new Date("2023-01-18"))).toEqual(new Date("2023-01-22 23:59:59:999"));
  });

  test("set weekStartsOn to 0", () => {
    expect(endOfWeek(new Date("2023-01-18"), 0)).toEqual(new Date("2023-01-21 23:59:59:999"));
  });
});
