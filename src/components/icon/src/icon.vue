<script lang="ts" setup>
import { CSSProperties, computed } from 'vue';
// method
const svgs = import.meta.glob('./svg/*.svg', { eager: true, query: '?raw', import: 'default' });
const getIcon = (name: string) => {
  return svgs[`./svg/${name}.svg`];
};
const addUnit = (value: string | number, defaultUnit = 'px') => {
  return typeof value === 'number'
    ? `${value}${defaultUnit}`
    : value.includes(defaultUnit)
      ? value
      : `${value}${defaultUnit}`;
};
const icon = computed(() => getIcon(props.name));
const style = computed<CSSProperties>(() => {
  if (!props?.size && !props?.color) return {};
  return {
    fontSize: props?.size ? addUnit(props.size) : undefined,
    '--color': props?.color ? props.color : undefined,
  };
});
// received props
const props = defineProps<YkIconProps>();
</script>

<script lang="ts">
export interface YkIconProps {
  name: string;
  color?: string;
  size?: string | number;
  loading?: boolean;
}
</script>

<template>
  <span :class="['yk-icon', loading ? 'is-loading' : '']" :style="style">
    <svg v-html="icon"></svg>
  </span>
</template>

<style lang="less" scoped>
.yk-icon {
  --color: inherit;
  height: 1em;
  width: 1em;
  line-height: 1em;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--color);
  fill: currentColor;
  font-size: inherit;
  font-style: normal;
  &.is-loading {
    animation: rotating 2s linear infinite;
  }
  svg {
    height: 1em;
    width: 1em;
    fill: currentColor;
  }
}

@keyframes rotating {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
</style>
