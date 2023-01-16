# formatDate

根据传入的占位符返回格式化后的日期。
功能可以参考[dayjs | format](https://dayjs.gitee.io/docs/zh-CN/display/format)

其中以下占位符与`dayjs`稍有差异

- `dd`未实现
- `ddd`未实现
- `dddd`返回的是中文格式的星期，例如`星期一`

## Usage

```ts
expect(formatDate(new Date("2022-12-31 23:59:59:999"), "YYYY-MM-DD"))
  .toBe("2022-12-31");
```
