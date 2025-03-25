import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "material-symbols:home-outline-rounded" },
  {
    text: "Web 三剑客",
    activeMatch: "/web/",
    prefix: "/web",
    icon: "uil:html5",
    items: [
      {
        text: "CSS指南",
        icon: "bxl:css3",
        link: "css/typography",
        activeMatch: "/web/css/",
      },
      {
        text: "JavaScript指北",
        icon: "fluent:javascript-16-filled",
        link: "javascript/es6",
        activeMatch: "/web/javascript/",
      },
    ],
  },
  {
    text: "Web 高级",
    activeMatch: "/web-high/",
    prefix: "/web-high",
    icon: "hugeicons:ai-web-browsing",
    items: [
      {
        text: "组件库扩展",
        icon: "mingcute:components-line",
        link: "lib-extend/element",
        activeMatch: "/web-high/lib-extend/",
      },
      {
        text: "微前端",
        icon: "circum:microchip",
        link: "micro-front-end/qiankun",
        activeMatch: "/web-high/micro-front-end/",
      },
    ],
  },
  {
    text: "工程化",
    activeMatch: "/fe-engineering/",
    prefix: "/fe-engineering",
    icon: "hugeicons:ai-web-browsing",
    items: [
      {
        text: "初始NodeJS",
        icon: "lineicons:nodejs",
        link: "nodejs",
        activeMatch: "/fe-engineering/nodejs",
      },
      {
        text: "Vite",
        icon: "lineicons:vite",
        link: "vite/base",
        activeMatch: "/fe-engineering/vite/",
      },
      {
        text: "实用技巧",
        icon: "material-symbols:tools-installation-kit-outline",
        link: "tools/auto-update",
        activeMatch: "/fe-engineering/tools/",
      },
    ],
  },
  {
    text: "DevOps",
    activeMatch: "/dev-ops/",
    prefix: "/dev-ops",
    icon: "hugeicons:ai-web-browsing",
    items: [
      {
        text: "Nginx百解",
        icon: "nonicons:nginx-16",
        link: "nginx",
      },
      {
        text: "Git百解",
        icon: "teenyicons:git-outline",
        link: "git",
      },
      {
        text: "ZSH 终端(Win)",
        icon: "devicon-plain:zsh",
        link: "zsh",
      },
      {
        text: "Vs Code 配置",
        icon: "tabler:brand-vscode",
        link: "vs-code",
      },
    ],
  },
  {
    text: "关于我",
    icon: "ix:about",
    activeMatch: "/about/",
    prefix: "/about",
    items: [
      {
        text: "书苑",
        link: "books",
        icon: "iconoir:book",
      },
      {
        text: "小记",
        link: "notes/001",
        icon: "hugeicons:note",
        activeMatch: "/about/notes/",
      },
    ],
  },
]);
