import { test, expect } from "vitest";
import { addCommas } from "./index";

test("add commas to number", () => {
  expect(addCommas(1)).toBe("1");
  expect(addCommas(10)).toBe("10");
  expect(addCommas(100)).toBe("100");
  expect(addCommas(1000)).toBe("1,000");
  expect(addCommas(1000.11)).toBe("1,000.11");
  expect(addCommas(1000.1111)).toBe("1,000.1111");
  expect(addCommas(-1000.1111)).toBe("-1,000.1111");
  expect(addCommas(1111111111)).toBe("1,111,111,111");
});

test("set delimiter", () => {
  expect(addCommas(1000, "/")).toBe("1/000");
  expect(addCommas(1000.11, "/")).toBe("1/000.11");
  expect(addCommas(1000.1111, "/")).toBe("1/000.1111");
  expect(addCommas(-1000.1111, "/")).toBe("-1/000.1111");
  expect(addCommas(1111111111, "/")).toBe("1/111/111/111");
});
