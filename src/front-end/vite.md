---
icon: skill-icons:vite-light
title: Vite
tags:
  - Vite
---

<!-- # Vite -->

## 1、配置代理

```javascript
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```

## 2、配置代理与显示请求日志

```javascript
import path from "path";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            console.log(
              `代理请求: ${proxyReq.method} 
              ${proxyReq.protocol}${proxyReq.host}${proxyReq.path}
              `
            );
          });
        },
      },
    },
  },
});
```

## 3、配置@别名

> 在`vite.config.js`中配置

```javascript
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "*": path.resolve(""),
    },
  },
});
```

---

增强语法提示: [项目环境配置](/ide/VsCode#_4、项目环境配置)

## 4、配置地址和端口

```javascript
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
```

## 5、多环境配置

### 1.创建环境

> 在`根目录`创建多环境文件

- `.env.development` - 开发环境
- `.env.test` - 测试环境
- `.env.pre` - 预发环境
- `.env.production` - 生产环境
- `.env.xxx` - xxxx 自动定义环境

**开发环境 - 示例**

```bash
# 开发环境
VITE_ENV = development

# 接口地址
VITE_API_BASE_URL = 'http://127.0.0.1:8088'
```

---

注意：只有以`VITE`开头的参数才会暴露出去

### 2.加载环境

> 在`package.json`中指定加载的环境

```json
"scripts": {
    "dev": "vite --mode development",
    "test": "vite --mode test",
    "pre": "vite --mode pre",
    "prod": "vite --mode production",
    "xxx": "vite --mode xxx 自定义环境",
    "build:dev": "vite build --mode development",
    "build:prod": "vite build --mode production",
    "build:pre": "vite build --mode pre",
    "build:test": "vite build --mode test ",
    "preview": "vite preview"
}
```

---

备注：

1.  `npm run dev` 自动加载 开发环境
2.  `npm run build` 自动加载 生产环境

### 3.环境变量

> 使用`import.meta.env`获取环境中配置的变量

```js
console.log(import.meta.env.VITE_ENV); // development

console.log(import.meta.env.VITE_API_BASE_URL); // http://127.0.0.1:8088
```

---

**在 vite.config.js 中使用环境变量**

- 例如：获取`VITE_APP_NGINX_LOCATION_URL`环境变量

```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_NGINX_LOCATION_URL } = env

  return {
    ...
  }
})
```

## 6、自动打开浏览器

```js
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true, // 服务启动时是否自动打开浏览器
  },
});
```

## 7、Vue3 子目录部署打包配置

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

## 8、Gzip 压缩

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

---

**相关**

- [Nginx-开启 Gzip 压缩](/operations/nginx.html#_4、配置-ssl)
