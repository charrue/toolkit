import { colord } from "colord";

export const toHex = (color: string) => colord(color).toHex();

export const toRgb = (color: string) => colord(color).toRgbString();

export const toRgba = (color: string) => {
  const alpha = colord(color).alpha();
  return colord(color).alpha(alpha).toRgbString();
};

export const toHsl = (color: string) => colord(color).toHslString();

export const toHsla = (color: string) => {
  const alpha = colord(color).alpha();
  return colord(color).alpha(alpha).toHslString();
};
