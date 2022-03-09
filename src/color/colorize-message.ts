import { yellow, red, cyan } from "kolorist";

type ColorizeType = "error" | "warn" | "info"

const colorizeHandler = {
  info: cyan,
  warn: yellow,
  error: red,
};

export const colorizeMessage = (message: string, type?: ColorizeType) => {
  if (type && colorizeHandler[type]) {
    return colorizeHandler[type](message);
  }
  return message;
};
