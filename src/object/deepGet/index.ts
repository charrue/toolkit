export function deepGet(
  object: Record<string, any>,
  props: Array<string | number>,
): any {
  let obj = object;
  props.forEach((item) => {
    obj = (obj || {})[item];
  });
  return obj;
}
