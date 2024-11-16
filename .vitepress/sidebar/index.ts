import { type DefaultTheme } from "vitepress/theme";

export default [
  {
    text: "Examples",
    items: [
      { text: "Markdown Examples", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" },
    ],
    collapsed: true,
  },
] as DefaultTheme.Sidebar | undefined;
