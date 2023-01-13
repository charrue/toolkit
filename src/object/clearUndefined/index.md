# clearUndefined

清除对象中的 `undefined` 值，并返回一个新的对象。
此方法不会修改原对象。

## Usage

```ts
const obj = {
  foo: 1,
  bar: undefined,
};

const result = clearUndefined(obj);
expect(result).toEqual({ foo: 1 });
expect(obj).toEqual({
  foo: 1,
  bar: undefined,
});
```
