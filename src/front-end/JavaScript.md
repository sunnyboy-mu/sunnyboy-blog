---
icon: skill-icons:javascript
title: JavaScript
tags:
  - JavaScript
---

<!-- # JavaScript -->

### 1、高级运算符

::: tip 可选链操作符 (?.)

:::

允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个关引用是否有效（是否为 undefined || null）

```js
const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

// 可以简单理解为 adventurer.dog ? adventurer.dog.name : undefined
const dogName = adventurer.dog?.name;

console.log(dogName); // undefined
```

> **使用场景**：当我们不确定一个对象是否存在时，调用对象属性，可以使用该操作符

::: tip 空值合并操作符 (??)

:::

当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数

```js
const foo = null ?? "default string";
console.log(foo); // "default string"
```

有点类似与 `||（逻辑或）`，与逻辑或的区别在于 `??` 操作符对 0 和 '' 会判断为真

> **使用场景：** 当需要把 0 或 '' 作为 真 时，使用 ?? ，否则使用 ||

::: tip 逻辑空赋值 (??=)

:::

逻辑空赋值运算符（x ??= y）仅在 x 是空值（null 或 undefined）时对其赋值

```js
const a = { duration: 50 };

a.duration ??= 10; // a.duration 存在，所以 不赋值
console.log(a.duration); //  50

a.speed ??= 25; // a.speed 不存在，所以 赋值
console.log(a.speed); // 25
```

> **使用场景：** 当你需要通过 if 判断某个变量不存在时，才需要为该变量赋值时使用
