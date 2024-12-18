import { defineNavbarConfig } from "vuepress-theme-plume";

export const navbar = defineNavbarConfig([
  { text: "首页", link: "/", icon: "ic:outline-home" },
  { text: "博客", link: "/blog/", icon: "ri:blogger-line" },
  {
    text: "开发",
    icon: "fluent:developer-board-lightning-20-filled",
    items: [
      {
        text: "前端",
        link: "/front-end/css",
        icon: "carbon:ibm-watsonx-code-assistant-for-z-refactor",
        activeMatch: "/front-end/",
      },
      {
        text: "后端",
        link: "/back-end/java/BigDecimal",
        activeMatch: "/back-end/",
        icon: "grommet-icons:codepen",
      },
      {
        text: "运维",
        link: "/operations/nginx",
        activeMatch: "/operations/",
        icon: "ix:operating-system",
      },
      {
        text: "编辑器",
        link: "/ide/VsCode",
        activeMatch: "/ide/",
        icon: "fluent:developer-board-16-regular",
        noIcon: true,
      },
    ],
  },
  {
    text: "随笔",
    icon: "mingcute:live-photo-line",
    items: [
      {
        text: "书签",
        link: "/bookmark/",
        activeMatch: "/bookmark/",
        icon: "iconoir:bookmark-book",
      },
      {
        text: "应用",
        link: "/application/",
        activeMatch: "/application/",
        icon: "icon-park-outline:application-one",
      },
      {
        text: "书苑",
        link: "/books/",
        activeMatch: "/books/",
        icon: "basil:book-outline",
      },
    ],
  },
]);
