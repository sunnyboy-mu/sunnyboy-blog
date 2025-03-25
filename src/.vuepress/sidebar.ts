import { ThemeSidebarMulti } from "vuepress-theme-plume";

export default {
  "/web/": [
    {
      text: "CSS指南",
      icon: "bxl:css3",
      prefix: "css/",
      collapsed: true,
      items: [
        {
          text: "Typography 排版",
          icon: "tabler:clipboard-typography",
          link: "typography",
        },
        {
          text: "Layout 布局",
          icon: "mingcute:layout-7-fill",
          link: "layout",
        },
        {
          text: "Animation 动画",
          icon: "tdesign:animation-1",
          link: "animation",
        },
      ],
    },
    {
      text: "JavaScript指北",
      icon: "fluent:javascript-16-filled",
      prefix: "javascript/",
      collapsed: true,
      items: [
        {
          text: "ES6 扩展",
          icon: "material-symbols:javascript-rounded",
          link: "es6",
        },
        {
          text: "Server-sent events",
          icon: "stash:link-solid",
          link: "server-sent-events",
        },
        {
          text: "File Api",
          icon: "mage:file-2",
          link: "file-api",
        },
        {
          text: "Tools 工具函数",
          icon: "flowbite:tools-outline",
          link: "tools",
        },
      ],
    },
  ],
  "/web-high/": [
    {
      text: "组件库扩展",
      icon: "mingcute:components-line",
      prefix: "lib-extend/",
      collapsed: true,
      items: [
        {
          text: "element",
          icon: "logos:element",
          link: "element",
        },
        {
          text: "Element Plus",
          icon: "ep:element-plus",
          link: "element-plus",
        },
        {
          text: "自定义 Vue 组件",
          icon: "flowbite:vue-solid",
          link: "custom-for-vue",
        },
      ],
    },
    {
      text: "微前端",
      icon: "circum:microchip",
      prefix: "micro-front-end/",
      collapsed: true,
      items: [
        {
          text: "qiankun 乾坤",
          icon: "mdi:access-point-network",
          link: "qiankun",
        },
      ],
    },
  ],
  "/fe-engineering/": [
    {
      text: "初始NodeJS",
      icon: "lineicons:nodejs",
      link: "nodejs",
    },
    {
      text: "Vite",
      icon: "lineicons:vite",
      prefix: "vite/",
      collapsed: true,
      items: "auto",
    },
    {
      text: "实用技巧",
      icon: "material-symbols:tools-installation-kit-outline",
      prefix: "tools/",
      collapsed: true,
      items: "auto",
    },
  ],
  "/dev-ops/": "auto",
  "/about/": [
    {
      text: "书苑",
      icon: "iconoir:book",
      link: "books",
    },
    {
      text: "小记",
      icon: "hugeicons:note",
      prefix: "notes/",
      collapsed: true,
      items: "auto",
    },
  ],
} as ThemeSidebarMulti;
