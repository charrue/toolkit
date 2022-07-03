import { describe, test, expect } from 'vitest';
import { imageUrlToBase64 } from './index';
import { isDataURL } from '../isDataURL/index';
describe("imageUrlToBase64", () => {
  test("image exist", async () => {
    const url = "https://cn.vuejs.org/images/logo.svg"

    const base64 = await imageUrlToBase64(url)

    expect(isDataURL(base64)).toBe(true)
  })


  test("image not exist", async () => {
    expect(
      await imageUrlToBase64("")
    )
      .toThrow()
  })
})