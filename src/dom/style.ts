/* eslint-disable no-param-reassign */
import { inBrowser } from "../browser/inBrowser/index";
import { camelize } from "../string/camelize";
import { isObj, isStr, isNum } from "../is/index";

export const getStyle = (
  element: HTMLElement,
  styleName: string,
): string => {
  if (!inBrowser || !element || !styleName) return "";

  let key = camelize(styleName);
  if (key === "float") key = "cssFloat";
  try {
    const style = (element.style as any)[key];
    if (style) return style;
    const computed: any = document.defaultView?.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  }
  catch {
    return (element.style as any)[key];
  }
};

export const setStyle = (
  element: HTMLElement,
  styleName: string | Record<string, any>,
  value?: string | number,
) => {
  if (!element || !styleName) return;

  if (isObj(styleName)) {
    Object.entries(styleName)
      .forEach(([prop, val]) => setStyle(element, prop, (val as string)));
  }
  else {
    const key: any = camelize(styleName);
    element.style[key] = value as any;
  }
};

export const removeStyle = (
  element: HTMLElement,
  style: string | Record<string, any>,
) => {
  if (!element || !style) return;

  if (isObj(style)) {
    Object.keys(style).forEach((prop) => removeStyle(element, prop));
  }
  else {
    setStyle(element, style, "");
  }
};

export function addUnit(value?: string | number, defaultUnit = "px") {
  if (!value) return "";
  if (isStr(value)) {
    return value;
  }
  if (isNum(value)) {
    return `${value}${defaultUnit}`;
  }
  return "";
}
