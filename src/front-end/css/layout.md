---
createTime: 2025/02/13 15:54:35
permalink: /front-end/css/layout/
---
# Layout 布局

## 九宫格

> 每个元素宽高为 1:1 的九宫格布局
>
> 同时适用于：`PC`、`Uni-App`、`小程序`

![九宫格布局](https://upyun-oss.mu00.cn/202410251837353.png)

- 方案一：`CSS`属性：`aspect-ratio`
  - 为盒子规定了首选纵横比，这个纵横比可以用于计算 auto 尺寸以及其他布局函数；
  - 设置为：`aspect-ratio: 1 / 1`；
- 方案二：`padding` + `absolute`
  - 设置`padding-top`或`padding-bottom`为`100%`，此时会按照宽度进行撑高包含块；
  - 子元素设置为`absolute`并撑满其包含块；

#### 1、aspect-ratio

```html :collapsed-lines
<!-- 样式 -->
<style>
  .list {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
    gap: 20rpx;
  }
  .item {
    aspect-ratio: 1 / 1;
    background-color: #008c8c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<!-- 结构 -->
<div class="list">
  <div class="item">item-01</div>
  <div class="item">item-02</div>
  <div class="item">item-03</div>
  <div class="item">item-04</div>
  <div class="item">item-05</div>
  <div class="item">item-06</div>
  <div class="item">item-07</div>
  <div class="item">item-08</div>
  <div class="item">item-09</div>
</div>
```

#### 2、Padding + Absolute

```html :collapsed-lines
<!-- 样式 -->
<style>
  .list {
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr 1fr;
    gap: 20rpx;
  }
  .item {
    position: relative;
    padding-bottom: 100%;
  }
  .item-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: #008c8c;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<!-- 结构 -->
<div class="list">
  <div class="item">
    <div class="item-container">item-01</div>
  </div>
  <div class="item">
    <div class="item-container">item-02</div>
  </div>
  <div class="item">
    <div class="item-container">item-03</div>
  </div>
  <div class="item">
    <div class="item-container">item-04</div>
  </div>
  <div class="item">
    <div class="item-container">item-05</div>
  </div>
  <div class="item">
    <div class="item-container">item-06</div>
  </div>
  <div class="item">
    <div class="item-container">item-07</div>
  </div>
  <div class="item">
    <div class="item-container">item-08</div>
  </div>
  <div class="item">
    <div class="item-container">item-09</div>
  </div>
</div>
```
