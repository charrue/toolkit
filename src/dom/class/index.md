# clz

将各个类名整合到一起。

## Usage

```ts
expect(
  clz("foo", ["bar"], {
    baz: true,
  })
).toBe("foo bar baz");
```

# hasClass

判断指定元素是否含有指定类名。

## Usage

```ts
hasClass(html, "is-dark");
```

# addClass

向指定元素添加一个或多个类名，类名之间用空格隔开。

## Usage

```ts
addClass(document.querySelect("#foo"), "is-visible opacity-1");
```

# removeClass

从指定元素移除一个或多个类名，类名之间用空格隔开。

## Usage

```ts
removeClass(document.querySelect("#foo"), "is-visible opacity-1");
```
