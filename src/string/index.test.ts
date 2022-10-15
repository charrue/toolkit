import { test, expect } from "vitest";
import {
  camelize,
  capitalize,
  hyphenate,
  padStart,
} from "./index";

test("camelize", () => {
  expect(camelize("hello-world")).toBe("helloWorld");
});

test("capitalize", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("hyphenate", () => {
  expect(hyphenate("helloWorld")).toBe("hello-world");
});

test("padStart", () => {
  expect(capitalize("helloWorld")).toBe("hello-world");
});
