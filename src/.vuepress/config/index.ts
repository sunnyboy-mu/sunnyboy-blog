import plumeTheme from "vuepress-theme-plume";
import footer from "./footer";
import plugins from "./plugins";
import blog from "./blog";

export default plumeTheme({
  // 添加您的部署域名
  hostname: "https://blog.mu00.cn/",
  docsRepo: "https://gitee.com/SunnyBoy_mu/sunnyboy-blog.git",
  docsDir: "src",
  autoFrontmatter: false,
  editLink: false,

  // 博客配置
  blog,

  // 底部信息
  footer,

  // 插件
  plugins,
});
