import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { path } from "vuepress/utils";
import theme from "./config/index";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "沐沐物语",
  description: "一个小白立志成为全栈开发工程师的的成长物语！",
  bundler: viteBundler(),
  dest: "dist",
  head: [["link", { ref: "icon", href: "/favicon.ico", type: "image/x-icon" }]],
  theme,
  alias: {
    "@theme/Nav/VPNavBarTitle.vue": path.resolve(
      __dirname,
      "./theme/components/NavBarTitle.vue"
    ),
  },
});
