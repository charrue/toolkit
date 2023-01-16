import { describe, test, expect } from "vitest";
import { rgbaToHex, rgbToHex, hexToRgb, hexToRgba, rgbToHsl, hslToRgb, hexToHsl } from "./index";

describe("convert", () => {
  test("rgbToHex", () => {
    expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
    expect(rgbToHex("rgb(300, 255, 255)")).toBe(undefined);
  });

  test("rgbaToHex", () => {
    expect(rgbaToHex("rgba(67, 255, 100, 0.85)")).toBe("#43ff64d9");
  });

  test("hexToRgb", () => {
    expect(hexToRgb("#fff")).toBe("rgb(255, 255, 255)");
    expect(hexToRgb("#ffffff")).toBe("rgb(255, 255, 255)");
    expect(hexToRgb("#43ff64d9")).toBe("rgba(67, 255, 100, 0.85)");
  });

  test("hexToRgba", () => {
    expect(hexToRgba("#fff")).toBe("rgba(255, 255, 255, 1)");
    expect(hexToRgba("#ffffff")).toBe("rgba(255, 255, 255, 1)");
    expect(hexToRgba("#43ff64d9")).toBe("rgba(67, 255, 100, 0.85)");
  });

  test("rgbToHsl", () => {
    expect(rgbToHsl("rgb(67, 255, 100)"))
      .toBe("hsl(131, 100%, 63%)");
  });

  test("hslToRgb", () => {
    expect(hslToRgb("hsl(131, 100%, 63%)"))
      .toBe("rgb(66, 255, 101)");
  });

  test("hexToHsl", () => {
    expect(hexToHsl("#43ff64")).toBe("hsl(131, 100%, 63%)");
  });
});
