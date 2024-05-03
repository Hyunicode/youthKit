<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue';
import { createNamespace } from '../../../utils/createNamespace';
import { YkIcon } from '../../icon';
import { validateIcon } from '../../../utils/validateIcon';

// received props
const props = defineProps<YkButtonProps>();

// validate props
onBeforeMount(() => {
  if (props.size && !validator(true, props.size)) console.error('size is invalid');
  if (props.type && !validator(false, props.type)) console.error('type is invalid');
});

// method
const validator = (isSize: boolean, value: string) => {
  if (isSize) return ['small', 'normal', 'large'].includes(value);
  else return ['danger', 'info', 'primary', 'success', 'warning'].includes(value);
};

const handleClick = () => {
  if (props.onClick) props.onClick();
};

const { BEM } = createNamespace('button');

// computed
const style = computed(() => {
  let res: Record<string, string> = {};
  if (props.color || props.textColor) {
    if (props.color) {
      res['--yk-button-bg-color'] = props.color;
      res['--yk-button-border-color'] = props.color;
    }
    if (props.textColor) res['--yk-button-text-color'] = props.textColor;
  }
  return res;
});
</script>

<script lang="ts">
export interface YkButtonProps {
  type?: 'danger' | 'info' | 'primary' | 'success' | 'warning';
  size?: 'small' | 'normal' | 'large';
  text?: boolean;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
  textColor?: string;
  content?: string;
  onClick?: () => void;
}
</script>

<template>
  <button
    :class="[
      BEM(),
      type && BEM(`--${type}`),
      size && BEM(`--${size}`),
      plain && 'is-plain',
      round && 'is-round',
      circle && 'is-circle',
      disabled && 'is-disabled',
      text && 'is-text',
    ]"
    :style="{
      color: textColor,
      ...style,
    }"
    :disabled="disabled"
    @click="handleClick"
  >
    <div :class="[BEM('content')]">
      <YkIcon v-if="loading" name="cycle" loading size="size" />
      <YkIcon v-if="!!icon && !loading" :name="validateIcon(icon)" />
      <span v-if="content">{{ content }}</span>
      <slot />
    </div>
  </button>
</template>

<style lang="less" scoped>
@import '../../../style/global.less';

// button base style
.yk-button {
  --yk-button-text-color: var(--yk-text-color-regular);
  --yk-button-font-weight: 500;
  --yk-button-bg-color: var(--yk-color-white);
  --yk-button-border-color: var(--yk-border-color);
  --yk-button-font-size-middle: var(--yk-font-size-middle);
  --yk-button-radius-middle: var(--yk-radius-middle);
  --yk-button-disabled-opacity: var(--yk-disabled-opacity);
  --yk-button-size: @buttonSizes[middle];
  --yk-button-size-large: @buttonSizes[large];
  --yk-button-size-small: @buttonSizes[small];
  --yk-button-padding: @paddingSizes[base] @paddingSizes[middle];
}

// button size related
.button-sizes() {
  each(@fontSizes, {
    &.yk-button--@{key} {
      --yk-button-size: ~'var(--yk-button-size-@{key})';
      --yk-button-padding: calc(var(--yk-button-size) - 20px) calc(var(--yk-button-size) - 12px);
      height: var(--yk-button-size);
      line-height: var(--yk-button-size);
      font-size: ~'var(--yk-font-size-@{key})';
      border-radius: ~'var(--yk-radius-@{key})';
    }
  });
}

// button color related
.button-color() {
  each(@colors, {
    &.yk-button--@{key} {
      --yk-button-bg-color: @value;
      --yk-button-text-color: #fff;
      --yk-button-border-color: @value;

      &.is-plain {
        --yk-button-bg-color: ~'var(--yk-color-@{key}-9)';
        --yk-button-text-color: @value;
        --yk-button-border-color: @value;
      }

      &.is-text {
        color: @value;
      }
    }
  });
}

.yk-button {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: var(--yk-button-size);
  white-space: nowrap;
  cursor: pointer;
  color: var(--yk-button-text-color);
  text-align: center;
  box-sizing: border-box;
  outline: none;
  transition: 0.1s;
  font-weight: var(--yk-button-font-weight);
  user-select: none;
  vertical-align: middle;
  appearance: none;
  background-color: var(--yk-button-bg-color);
  border: var(--yk-border);
  border-color: var(--yk-button-border-color);
  font-size: var(--yk-button-font-size-middle);
  border-radius: var(--yk-button-radius-middle);
  padding: var(--yk-button-padding);

  .yk-button__content {
    display: inline-flex;
    align-items: center;
    z-index: 1;
    .yk-icon:not(:last-child) {
      margin-right: 8px;
    }
  }

  & + & {
    margin-left: 12px;
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: currentColor;
    border-radius: inherit;
    transform: translate(-50%, -50%);
    opacity: 0;
    content: '';
  }

  .button-sizes();
  .button-color();

  &:hover,
  &:active {
    &:active {
      transform: scale(0.98);
    }
    &::before {
      opacity: 0.3;
    }
  }

  &.is-round {
    border-radius: var(--yk-radius-round);
  }

  &.is-circle {
    border-radius: 50%;
    padding: 8px;
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: var(--yk-button-disabled-opacity);
    &:active {
      transform: none;
    }
    &::before {
      display: none;
    }
  }

  &.is-text {
    color: var(--yk-button-text-color);
    border: 0 solid transparent;
    background-color: transparent;
  }
}
</style>
