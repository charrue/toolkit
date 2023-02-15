# getImageMeta

获取图片的宽高和宽高比

## Usage

```ts
getImageMeta(
  "https://img.alicdn.com/tfs/TB1ZQY9X8r0gK0jSZFnXXbRRXXa-200-200.png"
).then((meta) => {
  console.log(meta);
  // => { width: 200, height: 200, ratio: 1 }
});
```
