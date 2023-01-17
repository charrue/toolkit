import { getColorMode, isHslCodeValid, ColorMode } from "../getColorMode";
import { rgbToHsl, hexToHsl, hslToHex, hslToRgb } from "../convert/index";
import { HSL_RE } from "../constants";
import { toNumber } from "../../number/toNumber/index";

const ensureHslCode = (color: string) => {
  let hsl = color;
  const colorMode = getColorMode(color);
  if (colorMode === "rgb") {
    hsl = rgbToHsl(color) || "";
  }
  if (colorMode === "hex") {
    hsl = hexToHsl(color) || "";
  }

  if (!hsl) return undefined;

  const result = hsl.match(HSL_RE);
  if (!result) return undefined;

  const h = Number(result[1]);
  const s = toNumber(result[2]);
  const l = toNumber(result[3]);

  if (!isHslCodeValid(h, s, l)) return undefined;

  return {
    mode: colorMode,
    code: [h, s, l],
  };
};

export const rotateValue = (value: number, scale: number) => {
  if (scale < 0) {
    return value + scale > 0 ? value + scale : value + scale + 360;
  }
  return value + scale < 360 ? value + scale : value + scale - 360;
};

const outputColor = (hslColors: string[], colorMode?: ColorMode): string[] => {
  if (colorMode === "hex") {
    return hslColors.map(hslToHex);
  }

  if (colorMode === "rgb") {
    return hslColors.map(hslToRgb).filter(Boolean) as string[];
  }

  return hslColors;
};

export const createColorSchema = (color: string) => {
  const result = ensureHslCode(color);
  if (!result) return {};
  const colorMode = result.mode;
  const [h, s, l] = result.code;

  return {
    // https://uxplanet.org/how-to-use-a-complementary-color-scheme-in-design-b50d06df24ef
    complementary: () => {
      const hslColors = [`hsl(${rotateValue(h, 180)}, ${s}%, ${l}%)`];

      return outputColor(hslColors, colorMode);
    },
    // https://uxplanet.org/how-to-use-triadic-color-scheme-in-design-4b362206d7e8
    triadic: () => {
      const hslColors = [
        // origin
        `hsl(${rotateValue(h, -120)}, ${s}%, ${l}%)`,
        `hsl(${rotateValue(h, 120)}, ${s}%, ${l}%)`,
      ];

      return outputColor(hslColors, colorMode);
    },
    // https://uxplanet.org/how-to-use-analogous-color-scheme-in-design-bf32d18ab05c
    analogous: () => {
      const hslColors = [
        `hsl(${rotateValue(h, -30)}, ${s}%, ${l}%)`,
        `hsl(${rotateValue(h, 30)}, ${s}%, ${l}%)`,
      ];

      return outputColor(hslColors, colorMode);
    },
    // https://uxplanet.org/how-to-apply-monochromatic-color-scheme-in-design-10c809d671a5
    monochromatic: () => {
      const baseLight = 1 % 10;
      const hslColors = Array.from({ length: 10 }).map((_, i) => `hsl(${h}, ${s}%, ${baseLight + i * 10}%)`);

      return outputColor(hslColors, colorMode);
    },
    // https://uxplanet.org/how-to-use-a-tetradic-color-scheme-in-design-b8d7a5c9ffcb
    tetradic: () => {
      const hslColors = [
        `hsl(${rotateValue(h, 30)}, ${s}%, ${l}%)`,
        `hsl(${rotateValue(h, 180)}, ${s}%, ${l}%)`,
        `hsl(${rotateValue(h, 30 + 180)}, ${s}%, ${l}%)`,
      ];
      return outputColor(hslColors, colorMode);
    },
    // https://uxplanet.org/how-to-use-a-split-complementary-color-scheme-in-design-a6c3f1e22644
    splitComplementary: () => {
      const hslColors = [
        `hsl(${Math.round((h - 150) % 360)}, ${s}%, ${l}%)`,
        `hsl(${Math.round((h + 150) % 360)}, ${s}%, ${l}%)`,
      ];

      return outputColor(hslColors, colorMode);
    },

    getHslCode: () => [h, s, l],
  };
};
