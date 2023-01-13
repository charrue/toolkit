# simpleDeepMerge

深度合并两个对象的属性。

## Usage

```ts
const target = {
  key1: "value1",
  key2: "value2",
  key3: ["value3", { subkey: "subvalue" }],
};
const source = {
  key1: {
    subkey1: "subvalue1",
    subkey2: "subvalue2",
  },
  key3: ["value4"],
};

expect(simpleDeepMerge(target, source)).toEqual({
  key1: {
    subkey1: "subvalue1",
    subkey2: "subvalue2",
  },
  key2: "value2",
  key3: ["value3", { subkey: "subvalue" }, "value4"],
});
```
