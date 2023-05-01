# isSerializable

判断是否可以被序列化

## Usage

```ts
isSerializable({}) // true
isSerializable({ a: 1 }) // true
isSerializable({ a: () => {} }) // false
```
