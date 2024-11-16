import type { Theme } from "vitepress";

import DefaultTheme from "vitepress/theme";

import "./style/index.css";
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
  },
} satisfies Theme;
