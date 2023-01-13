# deepClone

深度拷贝。支持类型:
- `Object`
- `Array`
- `Date`
- `Map`
- `WeakMap`
- `Set`
- `WeakSet`
- `Regexp`

## Usage

``` ts
const obj1 = {
  foo: "foo",
};
const obj2 = {
  a: 1,
  b: "2",
  c: false,
  d: new Date(),
  e: RegExp("obj"),
  f: Symbol("symbol"),
  g: null,
  h: undefined,
  i: [1, 2, 3],
  j: {},
  k: new Map([["a", 1], ["b", 2]]),
  l: new Set([1, 2, 3]),
  m: new WeakMap([[{}, 1], [{}, 2]]),
  n: new WeakSet<string[]>([["a", "b"]]),
  obj1,
};

expect(deepClone(obj1)).toEqual(obj1);
expect(deepClone(obj2)).toEqual(obj2)

```
