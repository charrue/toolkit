import { isPlainObj } from "../../is/index";

export const clz = (...args: any[]) => {
  const classnames: Array<string | number> = [];
  for (let i = 0;i < args.length;i += 1) {
    const name = args[i];
    if (typeof name === "string" || typeof name === "number") {
      classnames.push(name);
    } else if (Array.isArray(name)) {
      classnames.push(clz(...name));
    } else if (isPlainObj(name)) {
      for (const key in name) {
        if (name[key]) {
          classnames.push(key);
        }
      }
    }
  }

  return classnames.join(" ");
};

export const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());

export const hasClass = (el: Element, cls: string): boolean => {
  if (!el || !cls) return false;
  if (cls.includes(" ")) throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};

export const addClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return;
  el.classList.add(...classNameToArray(cls));
};

export const removeClass = (el: Element, cls: string) => {
  if (!el || !cls.trim()) return;
  el.classList.remove(...classNameToArray(cls));
};
