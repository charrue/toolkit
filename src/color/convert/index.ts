// fork from https://github.com/Qix-/color-convert/blob/master/conversions.js

/* eslint-disable max-statements */
import { RGBA_RE, RGB_RE, HEX_RE, HSL_RE } from "../constants";
import { inRange } from "../../number/inRange/index";
import { toPrecision } from "../../number/toPrecision/index";
import { isRgbCodeValid } from "../getColorMode/index";
import { toNumber } from "../../number/toNumber/index";

const hexChar = (c: number) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const rgbToHex = (rgb: string) => {
  const result = rgb.match(RGB_RE);
  if (!result) return undefined;
  const r = Number(result[1]);
  const g = Number(result[2]);
  const b = Number(result[3]);
  if (!isRgbCodeValid(r, g, b)) {
    return undefined;
  }

  return `#${hexChar(Number(r))}${hexChar(Number(g))}${hexChar(Number(b))}`;
};

export const rgbaToHex = (rgba: string) => {
  const result = rgba.match(RGBA_RE);
  if (!result) return undefined;

  const r = Number(result[1]);
  const g = Number(result[2]);
  const b = Number(result[3]);
  const a = result[4] === undefined ? 1 : Number(result[4]);

  if (!(isRgbCodeValid(r, g, b) && inRange(a, 0, 1))) {
    return undefined;
  }
  return `#${hexChar(r)}${hexChar(g)}${hexChar(b)}${hexChar(Math.round(a * 255))}`;
};

export const hexToRgb = (hex: string) => {
  const result = hex.match(HEX_RE);
  if (!result) return undefined;
  let code = result[1];
  if (code.length === 3) {
    code = code.split("").map((char) => char + char).join("");
  }

  const r = parseInt(code.slice(0, 2), 16);
  const g = parseInt(code.slice(2, 4), 16);
  const b = parseInt(code.slice(4, 6), 16);
  if (code.length === 8) {
    const a = toPrecision(parseInt(code.slice(6, 8), 16) / 255, 2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
};

export const hexToRgba = (hex: string) => {
  if (!hex.startsWith("#")) {
    return undefined;
  }
  if (hex.length === 4) {
    const code = hex.slice(1).split("").map((char) => char + char).join("");
    return hexToRgb(`#${code}ff`);
  }
  if (hex.length === 7) {
    return hexToRgb(`${hex}ff`);
  }

  return hexToRgb(hex);
};

export const hexToHsl = (hex: string) => rgbToHsl(hexToRgb(hex) as string);

export const rgbToHsl = (rgb: string) => {
  const result = rgb.match(RGB_RE);
  if (!result) return undefined;

  const r = Number(result[1]) / 255;
  const g = Number(result[2]) / 255;
  const b = Number(result[3]) / 255;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;

  if (max === min) {
    h = 0;
  } else if (r === max) {
    h = (g - b) / delta;
  } else if (g === max) {
    h = 2 + (b - r) / delta;
  } else if (b === max) {
    h = 4 + (r - g) / delta;
  }

  h = Math.min(h * 60, 360);

  if (h < 0) {
    h += 360;
  }

  const l = (min + max) / 2;

  if (max === min) {
    s = 0;
  } else if (l <= 0.5) {
    s = delta / (max + min);
  } else {
    s = delta / (2 - max - min);
  }

  return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
};

export const hslToRgb = (hsl: string) => {
  const result = hsl.match(HSL_RE);
  if (!result) return false;

  const h = Number(result[1]) / 360;
  const s = toNumber(result[2]) / 100;
  const l = toNumber(result[3]) / 100;

  let t2;
  let t3;
  let val;

  if (s === 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5) {
    t2 = l * (1 + s);
  } else {
    t2 = l + s - l * s;
  }

  const t1 = 2 * l - t2;

  let rgb = [0, 0, 0];
  for (let i = 0;i < 3;i++) {
    t3 = h + (1 / 3) * -(i - 1);
    if (t3 < 0) {
      t3++;
    }

    if (t3 > 1) {
      t3--;
    }

    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }

    rgb[i] = val * 255;
  }

  rgb = rgb.map((v) => Math.round(v));

  return `rgb(${rgb.join(", ")})`;
};
