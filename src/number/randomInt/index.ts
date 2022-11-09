/**
 * Generating a random int in range (0, max - 1)
 */
export const randomInt = (max: number, min = 0): number => {
  if (max < min) {
    return randomInt(min, max);
  }
  return min + Math.floor(Math.random() * Math.floor(max));
};
