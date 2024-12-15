import type { PlumeThemePluginOptions } from "vuepress-theme-plume";

export default {
  comment: {
    comment: false,
  },
  /**
   * Shiki 代码高亮
   * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
   */
  shiki: {
    // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
    theme: "one-dark-pro",
    languages: [
      "shell",
      "java",
      "bash",
      "typescript",
      "javascript",
      "vue",
      "css",
      "html",
      "nginx",
    ],
  },

  /**
   * markdown enhance
   * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
   */
  markdownEnhance: {
    demo: true,
    //   include: true,
    //   chart: true,
    //   echarts: true,
    //   mermaid: true,
    //   flowchart: true,
  },

  /**
   *  markdown power
   * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
   */
  // markdownPower: {
  //   pdf: true,
  //   caniuse: true,
  //   plot: true,
  //   bilibili: true,
  //   youtube: true,
  //   icons: true,
  //   codepen: true,
  //   replit: true,
  //   codeSandbox: true,
  //   jsfiddle: true,
  //   repl: {
  //     go: true,
  //     rust: true,
  //     kotlin: true,
  //   },
  // },
} as PlumeThemePluginOptions;
