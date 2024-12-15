---
icon: ri:mini-program-line
title: 微信小程序
tags:
  - 微信小程序
---

<!-- # 微信小程序 -->

## 1、底部安全区域适配

### 苹果官方

> 苹果官方推出的`css`函数`env()`、`constant()`适配

`env`和`constant`是 IOS11 新增特性

::: info 有 4 个预定义变量

- safe-area-inset-left：安全区域距离左边边界的距离
- safe-area-inset-right：安全区域距离右边边界的距离
- safe-area-inset-top：安全区域距离顶部边界的距离
- safe-area-inset-bottom ：安全距离底部边界的距离

:::

```css
page {
  padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
  padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
}
```

### 微信官方

> `getSystemInfo()`中的`safeArea`对象进行适配

1.  在`app.js`中计算出底部安全区高度

```js
App({
  globalData: {
    bottomLift: 0, // 底部安全区高度
  },
  onLaunch() {
    const { screenHeight, safeArea } = wx.getSystemInfoSync();
    this.globalData.bottomLift = screenHeight - safeArea.bottom;
  },
});
```

2.  在页面`index.js`中引入底部安全区高度

```js
Page({
  data: {
    bottomLift: getApp().globalData.bottomLift,
  },
});
```

3.  在页面`index.wxml`中使用

```html
<view style="padding-bottom: {{ bottomLift }}px"></view>
```

## 2、手势滑动

### 实现思路

> 变量解释：
>
> - `startY`(开始 Y 坐标)、`startX`(开始 X 坐标)
> - `touchMoveY`（结束 Y 坐标）、`touchMoveX`（结束 X 坐标）

1.  通过`touchstart`事件获取手势开始时的 X、Y 坐标
2.  通过`touchend`获取手势结束时的 X、Y 坐标
3.  通过三角函数`Math.atan`计算角度(滑动范围)
4.  以元素左上角为原点，向右、向下增大,通过初始、结束坐标的 X、Y 轴位置判断
    - 在 X 轴上:`startX > touchMoveX`向左滑动；`touchMoveX > startX`向右滑动
    - 在 Y 轴上:`startY > touchMoveY`向上滑动；`touchMoveY > startY`向下滑动

::: details 封装工具库(touch.js)

```javascript
/**
 * 左右 or 上下 角度分隔值
 * 小于 45 左右滑动
 * 大于 45 上下滑动
 */
const slidingRange = 45;

/**
 * 起始坐标
 */
let startCoord = {
  x: 0,
  y: 0,
};

/**
 * 设置起始坐标
 * @param {Object} coord
 * @param {Number} coord.x
 * @param {Number} coord.y
 */
export function setStartCoord(coord) {
  startCoord.x = coord.x;
  startCoord.y = coord.y;
}

/**
 * 计算滑动角度
 * @param {Object} endCoord
 * @param {Number} endCoord.x
 * @param {Number} endCoord.y
 * @returns
 */
function _calculateAngle(endCoord) {
  const _X = endCoord.x - startCoord.x,
    _Y = endCoord.y - startCoord.y;
  //返回角度 Math.atan()返回数字的反正切值
  return Math.abs((360 * Math.atan(_Y / _X)) / (2 * Math.PI));
}

/**
 * 左右手势滑动处理
 * @param {Object} endCoord
 * @param {Number} endCoord.x
 * @param {Number} endCoord.y
 * @param {Function} leftHandler
 * @param {Function} rightHandler
 */
export function leftAndRightTouchHandler(endCoord, leftHandler, rightHandler) {
  const _angle = _calculateAngle(endCoord);
  if (_angle >= slidingRange || endCoord.x == startCoord.x) return;
  if (endCoord.x < startCoord.x) {
    leftHandler();
    return;
  }
  rightHandler();
}

/**
 * 上下手势滑动处理
 * @param {Object} endCoord
 * @param {Number} endCoord.x
 * @param {Number} endCoord.y
 * @param {Function} upHandler
 * @param {Function} downHandler
 */
export function upAndDownTouchHandler(endCoord, upHandler, downHandler) {
  const _angle = _calculateAngle(endCoord);
  if (_angle < slidingRange || endCoord.y == startCoord.y) return;
  if (endCoord.y < startCoord.y) {
    upHandler();
    return;
  }
  downHandler();
}
```

:::

### 小栗子

1.  给需要判断滑动方向的元素绑定`touchstart`、`touchend`事件

```html
<view
  class="touchView"
  bindtouchstart="touchstart"
  bindtouchend="touchend"
></view>
```

2.  给元素加个样式大小背景

```css
.touchView {
  height: 500rpx;
  width: 500rpx;
  margin: 0 auto;
  background-color: antiquewhite;
}
```

3.  在`js`中引入工具库

```js
import {
  setStartCoord,
  upAndDownTouchHandler,
  leftAndRightTouchHandler,
} from "../../utils/touch";
```

4.  `touchstart`获取初始坐标，并调用`setStartCoord`

```js
touchstart(e) {
    const { clientX: x, clientY: y } = e.changedTouches[0];
    setStartCoord({ x, y});
}
```

5.  `touchend`滑动结束处理手势滑动

```js
touchend(e) {
    const { clientX: x, clientY: y } = e.changedTouches[0];
    // 处理上下滑动
    upAndDownTouchHandler({ x, y
    }, () => {
        console.log('向上滑动');
    }, () => {
        console.log('向下滑动');
    });

    // 处理左右滑动
    leftAndRightTouchHandler({ x, y
    }, () => {
        console.log('向左滑动');
    }, () => {
        console.log('向右滑动');
    })
}
```
