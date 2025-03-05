import { defineClientConfig } from "vuepress/client";
import LinkCard from "./theme/components/LinkCard.vue";

import "./theme/styles/index.scss";

export default defineClientConfig({
  enhance({ app }) {
    app.component("LinkCard", LinkCard);
    // app.component('CustomComponent', CustomComponent)
  },
});
