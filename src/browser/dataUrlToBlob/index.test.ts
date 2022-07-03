import { dataUrlToBlob } from './index';
import{ test, expect } from "vitest"

test("not dataURL", () => {
  expect(dataUrlToBlob("")).toBeNull();
  expect(dataUrlToBlob("data:HelloWorld")).toBeNull();
})

test("dataUrlToBlob", () => {
  const str = "data:,Hello%2C%20World!"
  const blob = dataUrlToBlob(str)
  expect(blob).toBeInstanceOf(Blob)
  expect(blob?.type).toBe("")

  const str2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC"
  const blob2 = dataUrlToBlob(str2)
  expect(blob2).toBeInstanceOf(Blob)
  expect(blob2?.type).toBe("image/png")
})
