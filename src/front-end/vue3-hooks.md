---
icon: material-symbols:webhook
title: Vue3 - hooks
tags:
  - Vue3
  - Hooks
---

<!-- # Vue3 - hooks -->

- 放置文件夹：`composables`或`hooks`(依据个人习惯)

## 1、 defer 优化白屏

```js
import { onUnmounted, ref } from "vue";

/**
 * 函数用于在页面中使用，当页面中存在大量组件时，进行逐帧渲染的组件，避免白屏；
 * @param {Number} maxCount 组件最大数量
 * @return {function(Number): boolean}
 */
export function useDefer(maxCount = 100) {
  const frameCount = ref(1);

  let refId;

  function updateFrameCount() {
    refId = requestAnimationFrame(() => {
      frameCount.value++;
      if (frameCount.value >= maxCount) {
        return;
      }
      updateFrameCount();
    });
  }

  updateFrameCount();

  onUnmounted(() => {
    cancelAnimationFrame(refId);
  });

  return function (n) {
    return frameCount.value >= n;
  };
}
```

> 食用文档与说明，请移步[使用 defer 优化白屏时间](/front-end/vue.html#_4、使用defer优化白屏时间)
