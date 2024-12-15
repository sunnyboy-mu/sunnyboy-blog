import { SidebarMulti } from "vuepress-theme-plume";

export default {
  "/front-end/": [
    {
      text: "CSS小知识",
      icon: "skill-icons:css",
      link: "css",
    },
    {
      text: "JS小知识",
      icon: "skill-icons:javascript",
      link: "JavaScript",
    },
    {
      text: "JS工具库",
      icon: "arcticons:autotools",
      link: "js-utils",
    },
    {
      text: "Vue",
      icon: "skill-icons:vuejs-light",
      link: "vue",
    },
    {
      text: "Vue-Hooks",
      icon: "material-symbols:webhook",
      link: "vue3-hooks",
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
      text: "Uni-app",
      icon: "gravity-ui:math-union-shape",
      link: "uni-app",
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
