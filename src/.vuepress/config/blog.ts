import type { BlogOptions } from "vuepress-theme-plume";

export default {
  link: "/blog/",
  include: ["article/**.md"],
  pagination: {
    perPage: 5,
  },
  // 博客文章封面图
  postCover: {
    layout: "top",
    ratio: "16:7",
  },
} as false | BlogOptions | undefined;
