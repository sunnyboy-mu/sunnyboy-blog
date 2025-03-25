import { defineThemeConfig } from "vuepress-theme-plume";
import { navbar } from "./navbar";
import sidebar from "./sidebar";

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: "/logo.png",
  outline: "deep",
  social: [
    {
      icon: {
        svg: `<svg t="1734228496106" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8154" width="200" height="200"><path d="M512 0l441.557333 256v512L512 1024 70.442667 768V256z m0 13.909333L80.938667 262.741333v497.664L512 1009.194667l431.061333-248.789334V262.741333zM377.173333 875.648l-247.509333-142.890667V291.242667L512 70.528l95.146667 54.912-380.8 221.653333v329.813334l247.125333 142.72z m268.757334-727.808l248.405333 143.402667v441.514666L512 953.472l-97.024-55.978667 382.677333-220.586666v-329.813334l-248.448-143.445333z m-91.178667 142.933333v122.410667l1.024 327.082667-29.482667 16.384-93.013333-53.290667 0.341333-290.176H382.208L381.866667 356.309333l145.578666-83.84z" p-id="8155" fill="#67676C"></path></svg>`,
        name: "1Panel",
      },
      link: "https://web.mu00.cn:1314/",
    },
    {
      icon: {
        svg: `<svg t="1723730677484" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6449" style="width: 1.25rem; height: 1.25rem; vertical-align: middle;"><path d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m259.168-568.896h-290.752a25.28 25.28 0 0 0-25.28 25.28l-0.032 63.232c0 13.952 11.296 25.28 25.28 25.28h177.024a25.28 25.28 0 0 1 25.28 25.28v12.64a75.84 75.84 0 0 1-75.84 75.84h-240.224a25.28 25.28 0 0 1-25.28-25.28v-240.192a75.84 75.84 0 0 1 75.84-75.84h353.92a25.28 25.28 0 0 0 25.28-25.28l0.064-63.2a25.312 25.312 0 0 0-25.28-25.312H417.184a189.632 189.632 0 0 0-189.632 189.6v353.952c0 13.952 11.328 25.28 25.28 25.28h372.928a170.656 170.656 0 0 0 170.656-170.656v-145.376a25.28 25.28 0 0 0-25.28-25.28z" p-id="6450" fill="currentColor"></path></svg>`,
        name: "gitee",
      },
      link: "https://gitee.com/SunnyBoy_mu",
    },
    { icon: "github", link: "https://github.com/sunnyboy-mu" },
    {
      icon: {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>`,
        name: "email",
      },
      link: "mailto:sunnyboy_mu@163.com",
    },
  ],
  navbarSocialInclude: ["1Panel", "gitee", "github", "email"],

  sidebar,
  navbar,
});
