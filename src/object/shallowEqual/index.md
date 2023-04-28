# shallowEqual

浅比较两个对象或数组

## Usage

```ts
shallowEqual([1, 2, 3], [1, 2, 3]); // => true
shallowEqual([{ a: 5 }], [{ a: 5 }]); // => false

shallowEqual({ a: 5, b: "abc" }, { a: 5, b: "abc" }); // => true
shallowEqual({ a: 5, b: {} }, { a: 5, b: {} }); // => false

```
