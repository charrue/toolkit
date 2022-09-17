import { describe, test, expect } from 'vitest';
import { isDataURL } from './index';

describe("isDataURL", () => {
  test("true", () => {
    expect(isDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC")).toBeTruthy()
    expect(isDataURL( "data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E")).toBeTruthy()
    expect(isDataURL("data:,A%20brief%20note")).toBeTruthy()
    expect(isDataURL( " data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E")).toBeTruthy()
    expect(isDataURL( " data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D")).toBeTruthy()
    expect(isDataURL( " data:,Hello World!")).toBeTruthy()
    expect(isDataURL( " data:,Hello%2C%20World!")).toBeTruthy()
  })

  test("false", () => {
    expect(isDataURL( "")).toBeFalsy()
    expect(isDataURL( "dataxbase64")).toBeFalsy()
    expect(isDataURL( "data:HelloWorld")).toBeFalsy()
    expect(isDataURL( "data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E")).toBeFalsy()
    expect(isDataURL( "data:base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC")).toBeFalsy()
    expect(isDataURL( "http://wikipedia.org")).toBeFalsy()
    expect(isDataURL( "data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E")).toBeFalsy()
    expect(isDataURL( "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC")).toBeFalsy()
  })
})