import { describe, test, expect } from "vitest";
import { htmlToElement } from "./index";

describe("htmlToElement", () => {
  test("usage", () => {
    expect(document.querySelector("#app")).toBeNull();

    const dom = htmlToElement("<div id='app'> <span>Hello World</span> </div>");
    document.body.appendChild(dom!);
    expect(document.querySelector("#app")).toBeDefined();
  });
});
