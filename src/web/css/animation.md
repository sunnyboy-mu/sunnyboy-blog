---
createTime: 2025/02/13 15:59:22
icon: tdesign:animation-1
---

# Animation 动画

## 全屏滚动吸附

> 用途：企业官网

![全屏滚动吸附](https://upyun-oss.mu00.cn/202411011844252.gif)

#### 1、原理解析

1. 父容器设置样式：`overflow-y: scroll;`、`scroll-snap-type: y mandatory;`
   - scroll-snap-type: `吸附轴(x/y)` `[吸附程度(mandatory)]`
   - mandatory: 超过距离则自动滚动到下一个容器
2. 子元素设置样式：`scroll-snap-align: start;`
   - 滚动容器中的一个临界点
   - start: 开始部分; end: 结束部分; center: 中间部分

#### 2、功能实现

- HTML 结构

```html
<div class="container">
  <div class="page page1">
    <h1>第一页</h1>
  </div>
  <div class="page page2">
    <h1>第二页</h1>
  </div>
  <div class="page page3">
    <h1>第三页</h1>
  </div>
  <div class="page page4">
    <h1>第四页</h1>
  </div>
</div>
```

- CSS 样式

```css :collapsed-lines
/* 滚动条样式 */
::-webkit-scrollbar-track-piece {
  border-radius: 6px;
  background: #0000001a;
}
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background: #c1c1c1;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

* {
  margin: 0;
  padding: 0;
}
.container {
  height: 100vh;
  overflow-y: scroll;
  /* scroll-snap-type: 吸附轴(x/y) [吸附程度(mandatory)] */
  /* mandatory: 超过距离则自动滚动到下一个容器 */
  scroll-snap-type: y mandatory;
}

.container .page {
  height: 100vh;
  /* 滚动容器中的一个临界点 */
  /* start: 开始部分; end: 结束部分; center: 中间部分*/
  scroll-snap-align: start;
}

.container .page h1 {
  font-size: 100px;
  text-align: center;
  color: #fff;
  line-height: 100vh;
}

.page1 {
  background-color: #008c8c;
}
.page2 {
  background-color: #f40f40;
}
.page3 {
  background-color: skyblue;
}
.page4 {
  background-color: chocolate;
}
```
