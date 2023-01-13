# objectMap

遍历一个对象并返回一个新的对象，类似于数组的`map`方法。

最终返回值会忽略`undefined`值，所以当你不想要返回某个字段的时候，可以返回`undefined`。

## Usage

```ts
const KEY = Symbol("KEY");

const obj1 = {
  foo: 1,
  bar: 2,
  [KEY]: 3,
};

const obj3 = objectMap(
  obj1,
  (key, value) => {
    return {
      [key]: value * 2,
    };
  },
  true
);

expect(obj3).toEqual({
  foo: 2,
  bar: 4,
  [KEY]: 6,
});


// 返回undefined
const obj4 = objectMap(obj1, (key, value) => {
  if (value > 1) {
    return {
      [key]: value * 2,
    };
  }
  return undefined;
});

expect(obj4).toEqual({
  bar: 4,
});
```
