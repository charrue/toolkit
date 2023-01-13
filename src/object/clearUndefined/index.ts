export const clearUndefined = <T extends Record<any, any>>(object: T) => {
  const clone = { ...object };
  for (const key in clone) {
    if (clone[key] === undefined) delete clone[key];
  }
  return clone;
};
