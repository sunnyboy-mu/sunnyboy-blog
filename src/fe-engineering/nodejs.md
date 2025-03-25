---
createTime: 2025-03-25
---

## 1、npm

### 1.1、配置镜像源

- 华为镜像

```bash
npm config set registry https://mirrors.huaweicloud.com/repository/npm/
```

- 淘宝镜像

```bash
npm config set registry https://registry.npmmirror.com
```

### 1.2、常用命令

::: info 忽略对等依赖错误

解决依赖版本冲突，强行安装依赖

```bash
npm install --legacy-peer-deps
```

:::

## 2、详解 package.json

> 1. 标准字段：NPM 官方定义
> 2. 非标字段：作者自定义、构建工具定义

1. 标准字段
   - `name`:包名
   - `version`:版本
   - `description`:描述
   - `main`:入口文件
   - `files`:指定上次文件
   - `repository`:仓库信息
   - `keywords`:NPM 搜索关键字
   - `author`:作者
   - `license`:开源协议
   - `bugs`:提交 issues 的地址
   - `homepage`:官网主页 or 仓库地址
   - `dependencies`:生产环境依赖
   - `devDependencies`:开发环境依赖
   - `scripts`：项目运行的命令，比如 start、dev、build、prepare、test 等等
2. 非标字段
   - `module`:构建工具，项目的 esmodule 入口文件
   - `types`:TypeScript
   - `unpkg`:CDN
   - `jsdelivr`:CDN
   - `exports`:构建工具
   - `sideEffects`:构建工具，标志副作用
   - `buildOptions`:作者自定义

## 3、前端工程化

::: tip 前端开发的管理工具（降低开发成本，提升开发效率）

:::

### 01、模块化标准

- CommonJS（CJS）
- AMD
- CMD
- UMD
- Ecmascript Module（ESM）

---

CJS、AMD、CMD、UND 是：民间标准；ESM 是：官方标准。

广泛使用：CJS、ESM

### 02、CJS 与 ESM 核心区别

- 来源：CJS 民间标准；ESM 官方标准
- 方式：CJS 运行时；ESM 编译时

---

- 运行时：运行后才能确定依赖关系

```js
if (xxx) {
  const xxx = require("./2.js");
} else {
  const xxxx = require("./3.js");
}
```

- 编译时：运行之前确定依赖关系

```js
// 语法错误
if(xxx){
    import xxx form './2.js';
}else{
    import xxxx form './3.js';
}

// 正确
import xxx form './2.js';
import xxxx form './3.js';
```

### 03、模块化实现

- 浏览器（ESM）

- Node（CJS、ESM）

- 构建工具
