import { UserConfig } from "vitepress";
import path from "node:path";
export default {
  resolve: {
    alias: [
      {
        find: /^.*\/VPNavBarMenuLink\.vue$/,
        replacement: path.resolve(__dirname, "../components/NavBarMenuLink.vue"),
      },
    ],
  },
} as UserConfig;
