import { SidebarMulti } from "vuepress-theme-plume";

export default {
  "/front-end/": [
    {
      text: "CSS指南",
      icon: "icon-logo-css",
      prefix: "css/",
      collapsed: true,
      items: [
        {
          text: "Typography 排版",
          icon: "icon-typography",
          link: "typography",
        },
        {
          text: "Layout 布局",
          icon: "icon-layout",
          link: "layout",
        },
        {
          text: "Animation 动画",
          icon: "icon-animation",
          link: "animation",
        },
      ],
    },
    {
      text: "JavaScript指北",
      icon: "icon-java-script",
      prefix: "javascript/",
      collapsed: true,
      items: [
        {
          text: "ES6 扩展",
          icon: "icon-es6",
          link: "es6",
        },
        {
          text: "Tools 工具函数",
          icon: "icon-tools",
          link: "tools",
        },
      ],
    },
    {
      text: "Vue 生态",
      icon: "icon-vuejs",
      link: "vue/",
    },
    {
      text: "Vite",
      icon: "skill-icons:vite-light",
      link: "vite",
    },
    {
      text: "微信小程序",
      icon: "ri:mini-program-line",
      link: "miniprogram",
    },
    {
      text: "Element-ui",
      icon: "logos:element",
      link: "element-ui",
    },
    {
      text: "Node",
      icon: "logos:nodejs-icon",
      link: "node",
    },
    {
      text: "生态",
      icon: "mdi:ecology",
      link: "ecology",
    },
  ],
  "/back-end/": [
    {
      text: "Java",
      icon: "devicon:java",
      collapsed: true,
      prefix: "java/",
      items: [
        {
          text: "BigDecimal",
          icon: "carbon:character-decimal",
          link: "BigDecimal",
        },
        {
          text: "SpringBoot",
          icon: "logos:spring-icon",
          link: "springboot",
        },
      ],
    },
  ],
  "/operations/": [
    {
      text: "Nginx",
      icon: "icon-nginx",
      link: "nginx",
    },
    {
      text: "Git",
      icon: "icon-git",
      link: "git",
    },
    {
      text: "ZSH",
      icon: "icon-cmd",
      link: "zsh",
    },
  ],
  "/ide/": [
    {
      text: "VsCode",
      icon: "skill-icons:vscode-light",
      link: "VsCode",
    },
  ],
} as SidebarMulti;
