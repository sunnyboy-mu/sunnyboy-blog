---
createTime: 2025-03-25
icon: lineicons:vite
---

# 多环境配置

## 1.创建环境

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

## 2.加载环境

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

## 3.环境变量

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
