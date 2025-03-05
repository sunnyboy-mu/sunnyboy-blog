import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./config/index";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "小沐沐吖",
  description: "一个小白立志成为全栈开发工程师的的成长物语！",
  bundler: viteBundler(),
  dest: "dist",
  head: [
    ["link", { ref: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/c/font_4479889_c8hch7inxnu.css",
      },
    ],
  ],
  theme,
  alias: {
    "@theme/Nav/VPNavBarTitle.vue": path.resolve(
      __dirname,
      "./theme/components/NavBarTitle.vue"
    ),
    "@theme/VPIcon.vue": path.resolve(__dirname, "./theme/components/Icon.vue"),
  },
});
