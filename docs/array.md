
## forEachRight
反向遍历数组
``` ts
const arr = [1, 2, 3]
forEachRight(arr, (val, index, array) => {
  console.log(val, index, array)
})
// 3, 2, [1, 2, 3]
// 2, 1, [1, 2, 3]
// 1, 0, [1, 2, 3]
```

## findIndexRight
从后往前遍历数组，找到第一个符合条件的元素的索引
``` ts
const arr = [
  { name: "foo" },
  { name: "bar" },
  { size: 10 }
]
const index = findIndexRight(arr, (item) => item.name === "bar") // 2
```

## findRight
从后往前遍历数组，找到第一个符合条件的元素
``` ts
const arr = [
  { name: "foo" },
  { name: "bar" },
  { size: 10 }
]
const index = findRight(arr, (item) => item.name === "bar") // { name: "bar" }
```

## count
计算数组中符合条件的元素的个数
``` ts
const arr = [1, 2, 3, 4, 5]
const num = count(arr, (val, index, array) => {
  return index > 3
})
// num: 2
```

## clear
清空数组
``` ts
const arr = [1, 2, 3]
clear(arr) // arr: []
```

## removeIf
根据给定的条件移除数组中符合的第一个元素
``` ts
const arr = [1, 2, 3, 4, 5];
const item = removeIf(arr, (item) => {
  return item === 3
})
// item: 3
```

## removeAllIf
根据给定的条件移除数组中的所有符合的元素
``` ts
const arr = [1, 2, 3, 4, 5];
const items = removeAllIf(arr, (item) => {
  return item > 3
})
// items: [4, 5]
```

## toArray
将一个类数组转换为数组类型
``` ts
toArray("1234") // ["1", "2", "3", "4"]
toArray({ length: 2 }) // [undefined, undefined]
```

## move
将数组中的元素从from移动到to
``` ts
move([1, 2, 3], 0, 0) // [1, 2, 3]
move([1, 2, 3], 1, 2) // [1, 3, 2]
move([1, 2, 3], -1, 0) // [3, 1, 2]
```


## repeat
将一个数重复n次，返回一个数组
``` ts
const arr = repeat(0, 3) // [0, 0, 0]
const objArr = repeat({ name: "" }, 3) // [{ name: "" }, { name: "" }, { name: "" }]
```
