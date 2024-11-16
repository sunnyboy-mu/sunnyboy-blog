import { defineConfig, defineConfigWithTheme } from "vitepress";
import nav from "./nav/index";
import sidebar from "./sidebar";

import { ThemeConfig } from "./types";
import viteConfig from "./config/vite.config";

export default defineConfig(
  defineConfigWithTheme<ThemeConfig>({
    title: "SunnyBoy_mu",
    head: [
      ["link", { rel: "icon", href: "/favicon.ico" }],
      ["link", { rel: "stylesheet", href: "//at.alicdn.com/t/c/font_4571358_va7bc8p6bun.css" }],
    ],
    srcDir: "./src",
    themeConfig: {
      nav,
      sidebar,
      logo: "/logo.png",
      socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
      darkModeSwitchTitle: "切换暗色主题",
      lightModeSwitchTitle: "切换亮色主题",
      darkModeSwitchLabel: "切换主题",
      lastUpdated: {
        text: "最后更新时间",
      },
      outline: {
        label: "目录",
      },
      docFooter: {
        prev: "上一页",
        next: "下一页",
      },
    },
    vite: viteConfig,
  })
);
