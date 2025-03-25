---
createTime: 2025-03-25
icon: lineicons:vite
---

# 基本配置

## 1、配置代理

```js
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

```js
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

```js
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

## 4、配置地址和端口

```js
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
});
```

## 5、自动打开浏览器

```js
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    open: true, // 服务启动时是否自动打开浏览器
  },
});
```
