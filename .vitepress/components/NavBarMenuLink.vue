<script lang="ts" setup>
import type { DefaultTheme } from "vitepress/theme";
import { useData } from "vitepress";
import { isActive } from "vitepress/dist/client/shared.js";
import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";

defineProps<{
  item: DefaultTheme.NavItemWithLink;
}>();

const { page } = useData();
</script>

<template>
  <VPLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch),
    }"
    :href="item.link"
    :target="item.target"
    :rel="item.rel"
    :no-icon="item.noIcon"
    tabindex="0"
  >
    <span class="iconfont" v-if="item.icon" :class="item.icon"></span>
    {{ item.text }}
  </VPLink>
</template>

<style scoped lang="scss">
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  margin: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    inset: auto 50% 0;
    height: 2px;
    border-radius: 1px;
    background: var(--vp-c-brand-1);
    visibility: hidden;
    transition: inset 0.2s ease-in-out;
  }
  &:hover::before,
  &.active::before {
    inset: auto 0 0;
    visibility: visible;
  }
  span {
    margin-inline-end: 0.25em;
  }
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1);
}
</style>
