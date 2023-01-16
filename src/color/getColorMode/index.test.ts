import { describe, test, expect } from "vitest";
import { getColorMode, ColorMode } from "./index";

describe("getColorMode", () => {
  test("rgb", () => {
    expect(getColorMode("rgb(255, 255, 255)")).toBe(ColorMode.RGB);
    expect(getColorMode("rgb(266, 255, 255)")).toBe(undefined);
    expect(getColorMode("rgb(255, 255, 255, 0.2)")).toBe(ColorMode.RGB);
  });

  test("rgba", () => {
    expect(getColorMode("rgba(255, 255, 255, 1)")).toBe(ColorMode.RGBA);
    expect(getColorMode("rgba(255, 255, 255, 0.2)")).toBe(ColorMode.RGBA);
    expect(getColorMode("rgba(266, 255, 255, 1)")).toBe(undefined);
    expect(getColorMode("rgba(255, 255, 255, 3)")).toBe(ColorMode.RGBA);
  });

  test("hex", () => {
    expect(getColorMode("#ffffff")).toBe(ColorMode.HEX);
    expect(getColorMode("#fff")).toBe(ColorMode.HEX);
    expect(getColorMode("#ffffffaa")).toBe(ColorMode.HEX);
    expect(getColorMode("#ffffffa")).toBe(undefined);
  });

  test("hsl", () => {
    expect(getColorMode("hsl(147, 50%, 47%)")).toBe(ColorMode.HSL);
    expect(getColorMode("hsl(147, 50, 47)")).toBe(undefined);
    expect(getColorMode("hsl(9999, 50%, 47%)")).toBe(undefined);
  });

  test("hsla", () => {
    expect(getColorMode("hsla(0, 0%, 100%, 1)")).toBe(ColorMode.HSLA);
    expect(getColorMode("hsla(0, 0%, 100%, 0.1)")).toBe(ColorMode.HSLA);
    expect(getColorMode("hsla(aaa, 0%, 100%, 1)")).toBe(undefined);
    expect(getColorMode("hsla(30, 0%, 100%, 2)")).toBe(undefined);
  });
});
