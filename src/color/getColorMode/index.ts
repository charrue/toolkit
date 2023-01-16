import { HEX_RE, RGB_RE, RGBA_RE, HSL_RE, HSLA_RE } from "../constants";
import { inRange } from "../../number/inRange/index";
import { toNumber } from "../../number/toNumber/index";

export enum ColorMode {
  RGB = "rgb",
  RGBA = "rgba",
  HSL = "hsl",
  HSLA = "hsla",
  HEX = "hex",
}

export const isRgbCodeValid = (
  r: number,
  g: number,
  b: number,
) => [r, g, b].every((v) => inRange(v, 0, 255));

export const isHslCodeValid = (
  h: number,
  s: number,
  l: number,
) => inRange(h, 0, 360) && inRange(s, 0, 100) && inRange(l, 0, 100);

const isRgb = (color: string): boolean => {
  const result = color.match(RGB_RE);
  if (!result) return false;

  const r = Number(result[1]);
  const g = Number(result[2]);
  const b = Number(result[3]);
  return isRgbCodeValid(r, g, b);
};

const isRgba = (color: string): boolean => {
  const result = color.match(RGBA_RE);
  if (!result) return false;
  const r = Number(result[1]);
  const g = Number(result[2]);
  const b = Number(result[3]);
  const a = Number(result[4]);
  return inRange(Number(a), 0, 1) && isRgbCodeValid(r, g, b);
};

const isHex = (color: string): boolean => HEX_RE.test(color);

const isHsl = (color: string): boolean => {
  const result = color.match(HSL_RE);
  if (!result) return false;

  const h = Number(result[1]);
  const s = toNumber(result[2]);
  const l = toNumber(result[3]);
  return isHslCodeValid(h, s, l);
};

const isHsla = (color: string): boolean => {
  const result = color.match(HSLA_RE);
  if (!result) return false;
  const h = Number(result[1]);
  const s = toNumber(result[2]);
  const l = toNumber(result[3]);
  const a = toNumber(result[4]);
  return isHslCodeValid(h, s, l) && inRange(Number(a), 0, 1);
};

export const getColorMode = (color: string): ColorMode | undefined => {
  if (isHex(color)) {
    return ColorMode.HEX;
  }

  if (isRgb(color)) {
    return ColorMode.RGB;
  }

  if (isRgba(color)) {
    return ColorMode.RGBA;
  }

  if (isHsl(color)) {
    return ColorMode.HSL;
  }

  if (isHsla(color)) {
    return ColorMode.HSLA;
  }

  return undefined;
};
