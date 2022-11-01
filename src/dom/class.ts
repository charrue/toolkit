function toVal(mix: any) {
  let y = "";
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (let k = 0;k < mix.length;k += 1) {
        if (mix[k]) {
          y = toVal(mix[k]);
          if (y) {
            if (str) {
              str += " ";
            }
            str += y;
          }
        }
      }
    } else {
      for (const k in mix) {
        if (mix[k]) {
          if (str) {
            str += " ";
          }
          str += k;
        }
      }
    }
  }

  return str;
}

export const clz = (...args: any[]) => {
  let i = 0;
  let tmp = "";
  let x = "";
  let str = "";
  while (i < args.length) {
    i += 1;
    tmp = args[i];
    if (tmp) {
      x = toVal(tmp);
      if (x) {
        if (str) {
          str += " ";
        }
        str += x;
      }
    }
  }
  return str;
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
