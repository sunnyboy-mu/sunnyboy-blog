import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "icon-home" },
  { text: "博客", link: "/blog/", icon: "icon-boke" },
  {
    text: "前端",
    icon: "icon-qianduan",
    activeMatch: "/front-end/",
    prefix: "/front-end/",
    items: [
      {
        text: "CSS指南",
        icon: "icon-logo-css",
        link: "css/typography",
        activeMatch: "/front-end/css/",
      },
      {
        text: "JavaScript指北",
        icon: "icon-java-script",
        link: "javascript/es6",
        activeMatch: "/front-end/javascript/",
      },
    ],
  },
  {
    text: "开发",
    icon: "icon-kaifa",
    items: [
      {
        text: "后端",
        link: "/back-end/java/BigDecimal",
        activeMatch: "/back-end/",
        icon: "icon-houduan",
      },
      {
        text: "运维",
        link: "/operations/nginx",
        activeMatch: "/operations/",
        icon: "icon-yunweiguanli",
      },
      {
        text: "编辑器",
        link: "/ide/VsCode",
        activeMatch: "/ide/",
        icon: "icon-bianjiqi",
        noIcon: true,
      },
    ],
  },
  {
    text: "随笔",
    icon: "icon-suibi",
    items: [
      {
        text: "书签",
        link: "/bookmark/",
        activeMatch: "/bookmark/",
        icon: "icon-24gl-bookmarks2",
      },
      {
        text: "应用",
        link: "/application/",
        activeMatch: "/application/",
        icon: "icon-yingyong",
      },
      {
        text: "书苑",
        link: "/books/",
        activeMatch: "/books/",
        icon: "icon-icon_datas",
      },
    ],
  },
]);
