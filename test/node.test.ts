import { describe, test, expect } from 'vitest';
import { exec } from '../src/node/exec';
import path from 'path';

describe("node", () => {
  test("exec", () => {
    expect(
      exec("git rev-parse --abbrev-ref HEAD")
      .trim()
    ).toBe("master")
  })
})