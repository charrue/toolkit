# removeAllIf

移除数组中符合条件的所有元素, 返回一个新数组

## Usage

```ts
const arr = [1, 2, 3, 4, 5];
const newArr = removeAllIf(arr, (item) => {
  return item > 3;
});
// [1, 2, 3]
```
