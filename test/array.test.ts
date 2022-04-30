import {
  describe,
  it,
  expect,
  vi,
} from "vitest";
import {
  findRight,
  findIndexRight,
  clear,
  toArray,
  move,
  repeat,
  removeIf,
  removeAllIf,
} from "../src/array";

describe("Array", () => {
  it("findRight", () => {
    const arr = [
      0,
      1,
      2,
      3,
    ];
    const obj = findRight(arr, (value, index, array) => {
      expect(array).toBe(arr);
      expect(typeof index).toBe("number");
      return value > 1;
    });

    expect(obj).toBe(3);

    const obj2 = findRight(arr, (val) => val > 100);

    expect(obj2).toBeUndefined();

    const mockFunc = vi.fn();
    findRight([], mockFunc);
    expect(mockFunc).not.toHaveBeenCalled();
  });

  it("findIndexRight", () => {
    const arr = [
      0,
      1,
      2,
      3,
    ];
    const obj = findIndexRight(arr, (value, index, array) => {
      expect(array).toBe(arr);
      expect(typeof index).toBe("number");
      return value > 1;
    });

    expect(obj).toBe(3);

    const obj2 = findIndexRight(arr, (val) => val > 100);

    expect(obj2).toBe(-1);

    const mockFunc = vi.fn();
    findIndexRight([], mockFunc);
    expect(mockFunc).not.toHaveBeenCalled();
  });

  it("clear", () => {
    const arr = [
      1,
      2,
      3,
    ];
    clear(arr);
    expect(arr.length).toBe(0);
  });

  it("toArray", () => {
    expect(toArray([
      1,
      2,
      3,
    ])).toEqual([
      1,
      2,
      3,
    ]);
    expect(toArray("123")).toEqual([
      "1",
      "2",
      "3",
    ]);
    const obj = {
      length: 2,
    };
    expect(toArray(obj)).toEqual([undefined, undefined]);
    const obj2 = {
      0: "1",
      1: 2,
      length: 2,
    };
    expect(toArray(obj2)).toEqual(["1", 2]);
  });

  it("removeIf", () => {
    const arr = [1, 2, 3, 4, 5];
    const item = removeIf(arr, (item) => {
      return item === 3
    })
    expect(item).toBe(3)
  })

  it("removeAllIf", () => {
    const arr = [1, 2, 3, 4, 5];
    const items = removeAllIf(arr, (item) => {
      return item > 3
    })
    expect(items).toEqual([4, 5])
  })

  it("move", () => {
    expect(move([1, 2, 3], 0, 0)).toEqual([1, 2, 3]);
    expect(move([1, 2, 3], 1, 2)).toEqual([1, 3, 2]);
    expect(move([1, 2, 3], -1, 0)).toEqual([3, 1, 2]);
  })

  it("repeat", () => {
    expect(repeat(1, 0)).toEqual([]);
    expect(repeat(1, 3)).toEqual([1, 1, 1]);
  })

});
