/**
 * Generating a random int in range (0, max - 1)
 * @param max {number}
 */
// eslint-disable-next-line max-len
export const getRandomInt = (max: number, min = 0) => min + Math.floor(Math.random() * Math.floor(max));
