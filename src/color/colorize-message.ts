import {
  green,
  yellow,
  red,
  cyan,
} from "kolorist";

type ColorizeType = "success" | "error" | "warn" | "info";

const colorizeHandler = {
  success: green,
  error: red,
  warn: yellow,
  info: cyan,
};

export const colorizeMessage = (message: string, type?: ColorizeType) => {
  if (type && colorizeHandler[type]) {
    return colorizeHandler[type](message);
  }
  return message;
};

export * from "kolorist";
