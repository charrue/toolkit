import { getFormat } from "colord";

export type ColorFormat = NonNullable<ReturnType<typeof getFormat>>;

// eslint-disable-next-line max-len
export const getColorMode = (color: string): ColorFormat | undefined => getFormat(color);
