export const inRange = (value: number, min: number, max: number): boolean => {
  min = Math.min(min, max);
  max = Math.max(min, max);
  return value >= min && value <= max;
};
