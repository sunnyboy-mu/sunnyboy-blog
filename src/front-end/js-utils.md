---
icon: arcticons:autotools
title: JavaScript 工具函数
tags:
  - JS_Utils
---

<!-- # JavaScript 工具函数 -->

## 1、动态计算表格列宽度

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

/**
 * dynamicCalculationWidth 动态计算宽度(ElTable列宽)
 * 实现 table 单元格内容强制不换行
 * 注：prop,title有一个必传
 * @author 小沐沐吖 <sunnyboy_mu@163.com>
 * @license Apache-2.0
 * @param { string | number } title 标题
 * @param { array } tableData 表格数据
 * @param { string | null } prop 每列的prop
 * @param { number } num 列中有标签等加的富余量
 * @param { number } fontSize 字体大小，默认 14
 * @returns 每列的宽度
 * @file table-util.js
 */
export const dynamicCalculationWidth = (
  title = "",
  tableData = [],
  prop = "",
  num = 0,
  fontSize = 14
) => {
  let flexWidth = 0; // 初始化表格列宽
  ctx.font = `${fontSize}px Microsoft YaHei`;
  const dataLength = tableData.length;
  if (!title && !dataLength) {
    // title 与 tableData 都无数据 不做处理
    return;
  }

  if (!!title && !!dataLength) {
    // title 与 tableData 都有数据
    flexWidth = Math.max(
      ctx.measureText(title).width,
      findMaxWidthColText(tableData, prop)
    );
  } else if (!!title && !dataLength) {
    // title 有数据，tableData 没有数据
    flexWidth = ctx.measureText(title).width;
  } else if (!title && !!dataLength) {
    // title 没有数据，tableData 有数据
    flexWidth = findMaxWidthColText(tableData, prop);
  }
  return flexWidth + 40 + num + "px";
};

/**
 * @param { array } data
 * @param { string } prop
 */
function findMaxWidthColText(data, prop) {
  const colTextWidthArr = data.map((item) => {
    return ctx.measureText(String(item[prop])).width;
  });
  return Math.max(...colTextWidthArr);
}
```

## 2、元素全屏切换

```js
/**
 * 元素全屏切换
 * @author 小沐沐吖
 * @version 1.0.0
 * @file full-screen-util.js
 */

function getPropertyName(names, target) {
  return names.find((name) => name in target);
}

const enterFullScreenName = getPropertyName(
  [
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullScreen",
    "msRequestFullscreen",
  ],
  document.documentElement
);

/**
 * 进入全屏
 * @param {HTMLElement | Document} ele
 */
export function enter(ele) {
  enterFullScreenName && ele[enterFullScreenName]();
}

const exitFullScreenName = getPropertyName(
  [
    "exitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
    "msExitFullscreen",
  ],
  document
);

/**
 * 退出全屏
 */
export function exit() {
  console.log(exitFullScreenName);
  exitFullScreenName && document[exitFullScreenName]();
}

const fullScreenEleName = getPropertyName(
  [
    "fullscreenElement",
    "mozFullScreenElement",
    "webkitFullscreenElement",
    "msFullscreenElement",
  ],
  document
);

// 当前是否处于全屏状态
function fullScreenEle() {
  return document[fullScreenEleName] || null;
}

/**
 * 是否处于全屏状态
 * @returns {Boolean}
 */
export function isFull() {
  return !!fullScreenEle();
}

/**
 * 全屏切换
 * @param {HTMLElement | Document} ele
 */
export function toggle(ele) {
  isFull() ? exit() : enter(ele);
}
```

## 3、搜索关键字高亮

### 1. 实现思路

- 方案一：改变 `dom` 结构，影响性能；

  1.  根据关键字是否有值创建正则；
  2.  根据关键字过滤数据（或后端返回数据）
  3.  遍历数据每一项，使用`replace`函数，将每一项的中的关键字替换为`Dom`结构
  4.  页面渲染`Dom`结构（Vue 中使用 v-html）
  5.  设置高亮展示的样式
  6.  详情代码如下

- 方案二：`CSS Custom Highlight API`，由于是新特性，存在兼容性问题。
  - 参考：[原生 CSS Custom Highlight 终于来了~](https://juejin.cn/post/7199438741533376573)
  - 备份：[原生 CSS Custom Highlight 终于来了~ ](https://juejin.cn/creator/content/article/drafts)

### 2. 参考代码

```vue
<!-- App.vue -->
<script setup>
import { ref } from "vue";

const userNameSourceList = ["Alice", "Bob", "Charlie", "David"];
const searchValue = ref("");
const userNameList = ref(userNameSourceList);

/**
 * 搜索关键字高亮
 */
function searchUserName() {
  let reg;
  const key = searchValue.value;
  if (key) {
    reg = new RegExp(key, "gi");
  }
  const searchedList = userNameSourceList.filter((item) => item.includes(key));
  userNameList.value = searchedList.map((item) => {
    if (reg) {
      item = item.replace(
        reg,
        (match) => `<span class="keyword-highlight">${match}</span>`
      );
    }
    return item;
  });
}
</script>

<template>
  <input type="text" v-model="searchValue" @input="searchUserName" />
  <div v-for="item in userNameList" v-html="item"></div>
</template>

<style>
.keyword-highlight {
  color: red;
}
</style>
```

## 4、淘宝屏幕适配

1. 文档中添加

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
/>
```

2. 引入`amfe-flexible.js`

```js
// amfe-flexible.js
(function flexible(window, document) {
  var docEl = document.documentElement;
  var dpr = window.devicePixelRatio || 1;

  // adjust body font size
  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = 12 * dpr + "px";
    } else {
      document.addEventListener("DOMContentLoaded", setBodyFontSize);
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  // 大屏1920px，推荐 / 24，1rem = 80px
  // 移动端 750px，推荐 / 10，1rem = 75px
  function setRemUnit() {
    var rem = docEl.clientWidth / 24;
    docEl.style.fontSize = rem + "px";
  }

  setRemUnit();

  // reset rem unit on page resize
  window.addEventListener("resize", setRemUnit);
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      setRemUnit();
    }
  });

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement("body");
    var testElement = document.createElement("div");
    testElement.style.border = ".5px solid transparent";
    fakeBody.appendChild(testElement);
    docEl.appendChild(fakeBody);
    if (testElement.offsetHeight === 1) {
      docEl.classList.add("hairlines");
    }
    docEl.removeChild(fakeBody);
  }
})(window, document);
```
