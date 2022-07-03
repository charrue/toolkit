import { test, describe, expect } from 'vitest';
import { blobToDataUrl } from './index';
import { isDataURL } from '../isDataURL/index';

describe("blobToDataUrl",  () => {
  test("json blob", async () => {
    const blob = new Blob([JSON.stringify({ name: 'foo' }, null, 2)], {type : 'application/json'});
    const dataURL = await blobToDataUrl(blob);

    expect(dataURL).toBeTypeOf('string');

    if (typeof dataURL === "string") {
      expect(isDataURL(dataURL)).toBe(true);
    }

  })
})