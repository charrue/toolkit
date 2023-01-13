# objectForEach

遍历对象的可枚举属性。

## Usage

```ts
const obj = {
  foo: 1,
  bar: 2,
};

const result: Record<string, number> = {};
objectForEach(obj, (key, value) => {
  result[key] = value;
});
expect(result).toEqual({
  foo: 1,
  bar: 2,
});
```

**如果想要遍历 Symbol 类型的属性**

```ts
const KEY = Symbol("baz");
const obj = {
  foo: 1,
  bar: 2,
  [KEY]: 3,
};

const result: Record<string, number> = {};
objectForEach(
  obj,
  (key, value) => {
    result[key] = value;
  },
  true
);
expect(result).toEqual({
  foo: 1,
  bar: 2,
  [KEY]: 3,
});
```
