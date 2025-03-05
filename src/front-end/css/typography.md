---
createTime: 2025/02/13 15:33:06
permalink: /front-end/css/typography/
---
# Typography 排版

## 文本溢出

**1. 单行文本省略**

```css
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

**2. 多行文本省略**

```css
.text-ellipsis-more {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-box-orient: vertical;
}
```

**3. FlexBox 中单行文本省略（Tailwind CSS 为例）**

![FlexBox 中单行文本省略](https://upyun-oss.mu00.cn/202409281058300.png)

```html
<div class="flex justify-between items-center">
  <div class="min-w-0 flex-1 flex">
    <p class="truncate">
      <span> [我是标题] </span>
      <span>我是超长的标题</span>
    </p>
  </div>
  <p class="ml-5 flex-shrink-0">2024-12-12</p>
</div>
```

注：`min-w-0`不可缺少
