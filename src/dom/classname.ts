/* eslint-disable no-unused-expressions */
function toVal(mix: any) {
  let y = "";
  let str = "";

  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  }
  else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (let k = 0;k < mix.length;k += 1) {
        if (mix[k]) {
          y = toVal(mix[k]);
          if (y) {
            str && (str += " ");
            str += y;
          }
        }
      }
    }
    else {
      for (const k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }

  return str;
}

export const classname = (...args: any[]) => {
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
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
};
