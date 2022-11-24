/* eslint-disable no-cond-assign */
const isOverflowHidden = <T extends Element>(el: T) => getComputedStyle(el, "overflow") === "hidden";
const getComputedStyle = <T extends Element>(el: T, property: keyof CSSStyleDeclaration) => {
  const computedStyle = window.document.defaultView?.getComputedStyle?.(el, null);
  if (!computedStyle) return undefined;

  return property ? computedStyle[property] : computedStyle;
};
const isOnDocument = (el: any) => {
  // eslint-disable-next-line no-cond-assign
  while ((el = el.parentNode)) {
    if (el === document) return true;
  }
  return false;
};
const isVisibleDueToOverflow = (el: any) => {
  const elPositioning = getPositioning(el.getBoundingClientRect());

  while ((el = el.parentElement)) {
    if (el.nodeType !== 9 && isOverflowHidden(el)) {
      const parentElPositioning = getPositioning(el.getBoundingClientRect());

      const isElInsideParentRectX = elPositioning.startX >= parentElPositioning.startX
        && elPositioning.endX <= parentElPositioning.endX;
      const isElInsideParentRectY = elPositioning.startY >= parentElPositioning.startY
        && elPositioning.endY <= parentElPositioning.endY;

      if (!isElInsideParentRectX || !isElInsideParentRectY) return false;
    }
  }

  return true;
};
const getPositioning = ({ x, width, y, height }: DOMRect) => {
  return {
    startX: x,
    endX: x + width,
    startY: y,
    endY: y + height,
  };
};

export const isElementVisible = <T extends Element>(el: T): boolean => {
  if (!isOnDocument(el)) return false;

  const isHiddenDueToOpacity = getComputedStyle(el, "opacity") === "0";
  const isHiddenDueToDisplay = getComputedStyle(el, "display") === "none";
  const isHiddenDueToVisibility = getComputedStyle(el, "visibility") === "hidden";
  if (isHiddenDueToOpacity || isHiddenDueToDisplay || isHiddenDueToVisibility) return false;

  return isVisibleDueToOverflow(el);
};
