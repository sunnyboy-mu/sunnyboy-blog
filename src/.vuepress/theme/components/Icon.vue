<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vuepress/client";
import { isLinkHttp } from "vuepress/shared";

const props = defineProps<{
  name: string | { svg: string };
  size?: string | number;
  color?: string;
}>();

const type = computed(() => {
  if (
    typeof props.name === "string" &&
    (isLinkHttp(props.name) || props.name[0] === "/")
  ) {
    return "link";
  }
  return "iconfont";
});

const link = computed(() => {
  if (type.value === "link") {
    const link = props.name as string;
    return isLinkHttp(link) ? link : withBase(link);
  }
  return "";
});

const size = computed(() => {
  const size = props.size;
  if (!size) return "14px";
  if (String(Number(size)) === size) return `${size}px`;
  return size;
});

const style = computed(() => {
  if (type.value === "iconfont") {
    return {
      color: props.color,
      // width: size.value,
      // height: size.value,
      "font-size": size.value,
    };
  } else {
    return {
      "background-color": props.color,
      width: size.value,
      height: size.value,
    };
  }
});
</script>

<template>
  <span v-if="type === 'link'" class="vp-icon-img">
    <img :src="link" alt="" :style="{ height: size }" />
  </span>
  <span v-else class="vp-icon iconfont" :class="[name]" :style="style" />
</template>

<style scoped>
.vp-icon-img {
  display: inline-block;
  width: max-content;
  height: 1em;
  margin: 0 0.3em;
  vertical-align: middle;
}

.vp-icon-img img {
  height: 100%;
}

.vp-icon.iconfont {
  color: inherit;
  line-height: 1;
  background: transparent;
}
</style>
