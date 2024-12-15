<script lang="ts" setup>
import VPImage from "vuepress-theme-plume/components/VPImage.vue";
import VPLink from "vuepress-theme-plume/components/VPLink.vue";
import { useRouteLocale } from "vuepress/client";
import { useData, useSidebar } from "vuepress-theme-plume/composables";

const { theme, site, isDark } = useData();
const { hasSidebar } = useSidebar();
const routeLocale = useRouteLocale();
import SparklesText from "./SparklesText.vue";
</script>

<template>
  <div class="vp-navbar-title" :class="{ 'has-sidebar': hasSidebar }">
    <VPLink
      class="title"
      :style="{ color: isDark ? 'rgba(255, 255, 245, 0.86)' : '#dc2626' }"
      :href="theme.home ?? routeLocale"
    >
      <slot name="nav-bar-title-before" />

      <VPImage
        v-if="theme.logo"
        class="logo"
        :image="{ light: theme.logo, dark: theme.logoDark || theme.logo }"
      />
      <SparklesText :sparkles-count="5" :text="site.title"></SparklesText>

      <slot name="nav-bar-title-after" />
    </VPLink>
  </div>
</template>

<style scoped>
.title {
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 20px;
  font-weight: 700;
  font-family: "ZWZT";
  border-bottom: 1px solid transparent;
  transition: opacity var(--vp-t-color), color var(--vp-t-color),
    border-bottom var(--vp-t-color);
  overflow: hidden;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .vp-navbar-title.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  height: min(var(--vp-nav-logo-height, 24px), 48px);
  margin-right: 8px;
}
</style>
