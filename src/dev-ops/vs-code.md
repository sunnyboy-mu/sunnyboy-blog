---
createTime: 2025-03-25
icon: tabler:brand-vscode
---

# Vs Code 配置

## 1、核心配置

::: details 如何打开配置文件？

1. 打开设置
2. 打开配置文件

![Settings.json](https://upyun-oss.mu00.cn/2025/03/25//1742865793214.png)
:::

```json
{
  // 菜单栏只显示菜单图标
  "window.menuBarVisibility": "compact",
  // 将命令启动器与窗口标题栏分开
  "window.commandCenter": false,
  // 禁用布局控件
  "workbench.layoutControl.enabled": false,
  // 自动更新已启用的扩展
  "extensions.autoUpdate": "onlyEnabledExtensions",
  // 在没有从上一会话中恢复出信息的情况下，不打开编辑器
  "workbench.startupEditor": "none",
  // 文件图标主题
  "workbench.iconTheme": "material-icon-theme",
  // 编辑器字体大小
  "editor.fontSize": 16,
  // 一个制表符等于的空格数
  "editor.tabSize": 2,
  // 编辑器折行的方式：较小值处折行
  "editor.wordWrap": "bounded",
  // 优化鼠标样式
  "editor.cursorBlinking": "smooth",
  // 自动重命名HTML标签
  "editor.linkedEditing": true,
  // 彩虹括号配置 1
  "editor.guides.bracketPairs": true,
  // 彩虹括号配置 2
  "editor.guides.bracketPairsHorizontal": "active",
  // 彩虹括号配置 3
  "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
  // 彩虹括号配置 4
  "editor.defaultColorDecorators": true,
  // 控制活动代码段是否阻止代码提示
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  // 控制是否应自动关闭括号、引号和括号
  "editor.autoClosingBrackets": "languageDefined",
  // 保存时自动格式化
  "editor.formatOnSave": true,
  // 自动格式化粘贴内容
  "editor.formatOnPaste": true,
  // 默认格式化工具 - Prettier - Code formatter 插件
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 当编辑器失去焦点时，自动保存
  "files.autoSave": "onFocusChange",
  // 排除文件和文件夹
  "files.exclude": {
    "**/node_module": true
  },

  // 默认终端 - Git
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  // 终端组合键绑定
  "terminal.integrated.allowChords": false,
  // 删除文件确认
  "explorer.confirmDelete": false,
  // 拖放移动文件或文件夹时确认
  "explorer.confirmDragAndDrop": false,
  // 自动更新导入路径
  "javascript.updateImportsOnFileMove.enabled": "always",
  // 始终允许不受信任的文件引入受信任的工作区，而不显示提示
  "security.workspace.trust.untrustedFiles": "open",
  // 允许提示用户对 Intellisense 使用在工作区中配置的 TypeScript 版本
  "typescript.enablePromptUseWorkspaceTsdk": true,

  // Git 配置 - Start
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "git.ignoreRebaseWarning": true
  // Git 配置 - End
}
```

## 2、插件推荐

| 名称                                       | 描述               |
| :----------------------------------------- | :----------------- |
| `IntelliSense for CSS class names in HTML` | 智能 CSS 类名提示  |
| `Inline Parameters for VSCode`             | 函数参数提示       |
| `Vue - Official`                           | Vue 语法支持       |
| `Code Spell Checker`                       | 单词拼写检查       |
| `VueHelper`                                | Vue 代码片段       |
| `vue-helper`                               | Vue 代码片段       |
| `Path Autocomplete`                        | 路径别名支持       |
| `Path Intellisense`                        | 路径别名支持       |
| `Live Server`                              | 本地开发服务器     |
| `Code Runne`                               | 代码运行程序       |
| `Material Icon Theme`                      | VsCode 文件图标    |
| `Image preview`                            | 代码行图像预览     |
| `indent-rainbow`                           | 彩虹缩进           |
| `Prettier - Code formatter`                | 代码格式化程序     |
| `PrettierConfig for VS Code`               | 代码格式化程序配置 |
| `CodeGeeX`                                 | 智能 AI 编程助手   |

## 3、项目环境配置

> 在**根目录**下创建文件`jsconfig.json`或`tsconfig.json`

- 即使项目中没有使用 TypeScript，也可以使用此文件来获得更好的 IDE（集成开发环境）支持
- 比如更准确的代码自动补全、语法提示、路径别名、导航和类型检查等等

```json
{
  "compilerOptions": {
    // 指定用于解析非相对模块名称的基目录
    "baseUrl": "./",
    // 类型支持
    "types": ["element-plus/global"],
    // 路径别名
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```

## 4、控制台权限不足

> `Windows`平台下，如`node`、`npm`、`tsc`等命令在`VsCode`控制台执行时，发生报错

**错误如下**

```bash
xxx : 无法加载文件 xxxx，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
```

**解决方案**

1.  `Win` + `X`
2.  运行`Windows PowerShell(管理员)`
3.  执行命令

```bash
set-ExecutionPolicy RemoteSigned
```

4.  输入`Y`，回车；关闭窗口，重启 VsCode

## 5、在 VsCode 中代码调试

> 演示

![image-20240703144800408](https://upyun-oss.mu00.cn/202407031452884.gif)

### ✨1、添加配置

1. 在`.vscode`目录下新建`launch,json`文件
2. 添加如下配置

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "dev",
      "url": "http://localhost:5173", // Replace with your project's local URL
      "webRoot": "${workspaceFolder}",
      "runtimeExecutable": "stable" // Use the "stable" or custom browser path
    }
  ]
}
```

3. 根据需要修改`url`和`runtimeExecutable`

![调试配置](https://upyun-oss.mu00.cn/202407031502887.png)

---

注：`runtimeExecutable`默认使用`stable`即可，若提示错误，请将该值改为`浏览器地址`

例如`Google Chrome`浏览器（Win）：

```bash
C:/Program Files/Google/Chrome/Application/chrome.exe
```

### ✨2、启动调试

1. 在代码文件中添加**断点**（红框位置，鼠标单击）

![添加断点](https://upyun-oss.mu00.cn/202407031459351.png)

2. 在左侧工具栏中，选择`调试`，运行`dev`即可

![启动调试](https://upyun-oss.mu00.cn/202407031501726.png)
