---
icon: carbon:character-decimal
title: BigDecimal
tags:
  - BigDecimal
---

<!-- # BigDecimal -->

> 在要求高精度运算的项目中（比如：金融），使用浮点数（float, double）会存在误差，因此需要使用`BigDecimal`类来保证精度。
>
> `BigDecimal` 是 `java.math` 类库中的一个用于处理**大浮点数**的类。

## 1、建议

1. 使用 `String` 类型的参数构造 `BigDecimal` 对象，而不是使用 float, double 等类型的参数。
2. 使用 `compareTo()` 方法来比较两个 `BigDecimal` 对象。
3. 建议使用 `toPlainString()` 方法将 `BigDecimal` 转换成字符串。
4. 使用 `setScale()` 方法设置精度，但不会修改原对象，需要重新赋值。

## 2、算术运算

```java
BigDecimal a = new BigDecimal("123.456");
BigDecimal b = new BigDecimal("789.001");

// 加法
BigDecimal sum = a.add(b);
System.out.println(sum.toPlainString());

// 减法
BigDecimal sub = a.subtract(b);
System.out.println(sub.toPlainString());

// 乘法
BigDecimal mul = a.multiply(b);
System.out.println(mul.toPlainString());

// 除法
BigDecimal div = a.divide(b);
System.out.println(div.toPlainString());

// 幂运算
BigDecimal pow = a.pow(2);
System.out.println(pow.toPlainString());
```

## 3、比较大小

```java
BigDecimal a = new BigDecimal("123.456");
BigDecimal b = new BigDecimal("789.001");

// 比较大小
System.out.println(a.compareTo(b));
```

> `a.compareTo(b)` 返回一个 `int` 类型的数值
>
> 1. 如果 a > b，返回 1
> 2. 如果 a = b，返回 0
> 3. 如果 a < b，返回 -1

## 4、精度处理

```java
BigDecimal a = new BigDecimal("123.4567890");

// 保留两位小数
// RoundingMode.HALF_UP 四舍五入
BigDecimal scale = a.setScale(2, RoundingMode.HALF_UP);
System.out.println(scale.toPlainString());
```
