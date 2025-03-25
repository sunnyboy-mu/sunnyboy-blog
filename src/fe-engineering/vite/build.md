---
createTime: 2025-03-25
icon: lineicons:vite
---

# 部署优化

## 1、Vue3 子目录部署打包配置

> 1.  默认情况下，`vite`会假设你的应用是被部署在一个域名的根路径上，例如 https://www.mu00.cn
>
> 2.  如果应用被部署在一个子路径上，你就需要在打包时指定这个子路径(或者 `Nginx` 中 `location` 匹配的 URL 路径)，例如 https://www.mu00.cn/admin

### 1. 修改 vite-config

- 打包时需要配置`base`属性为：子路径(或者 `Nginx` 中 `location` 匹配的 URL 路径)

```js
export default defineConfig({
  // 子路径(或者 Nginx 中 location 匹配的URL路径)
  base: "/admin/",
});
```

### 2. 修改 router

- 在`router/index.js`文件创建路由时，为`createWebHistory`或者`createWebHashHistory`传入`base`参数
- 参数值为：子路径(或者 `Nginx` 中 `location` 匹配的 URL 路径)

```js
const router = createRouter({
  // 子路径(或者 Nginx 中 location 匹配的URL路径)
  history: createWebHistory('/admin/'),
  routes: [...],
})
```

## 2、Gzip 压缩

1. 安装`vite-plugin-compression`插件

```bash
npm i -D vite-plugin-compression
```

2. 配置`vite.config.js`

```js
import ViteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    ViteCompression({
      verbose: true, // 是否在控制台输出压缩结果
      disable: false, // 是否禁用压缩，默认值: false
      threshold: 10240, // 只处理大于此大小的资源（单位：字节）；默认值: 0
      algorithm: "gzip", // 使用 gzip 压缩
      ext: ".gz", // 输出文件的拓展名
    }),
  ],
});
```

> 需要`Nginx`配合，才能正确启用`Gzip`压缩
