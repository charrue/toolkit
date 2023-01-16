import { describe, test, expect } from "vitest";
import { startOfWeek } from "./index";

describe("startOfWeek", () => {
  test("default", () => {
    expect(startOfWeek(new Date("2023-01-18"))).toEqual(new Date("2023-01-16 00:00:00:000"));
  });

  test("set weekStartsOn to 0", () => {
    expect(startOfWeek(new Date("2023-01-18"), 0)).toEqual(new Date("2023-01-15 00:00:00:000"));
  });
});
