# getDateFields

获取一个 Date 对象表示的年月日时分秒。

## Usage

```ts
expect(getDateFields(new Date("2022-10-10 10:10:10:001"))).toEqual({
  year: 2022,
  month: 10,
  day: 10,
  hour: 10,
  minute: 10,
  second: 10,
  millisecond: 1,
});
```
