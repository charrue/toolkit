import { dataUrlToFile } from './index';
import{ test, expect } from "vitest"

test("not dataURL", () => {
  expect(dataUrlToFile("", "foo.txt")).toBeNull();
  expect(dataUrlToFile("data:HelloWorld", "foo.txt")).toBeNull();
})

test("dataUrlToFile", () => {
  const str = "data:,Hello%2C%20World!"
  const file = dataUrlToFile(str, "foo.txt")
  expect(file).toBeInstanceOf(File)
  expect(file?.type).toBe("")
  expect(file?.name).toBe("foo.txt")

  const str2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC"
  const file2 = dataUrlToFile(str2, "foo.png")
  expect(file2).toBeInstanceOf(File)
  expect(file2?.type).toBe("image/png")
  expect(file2?.name).toBe("foo.png")
})
