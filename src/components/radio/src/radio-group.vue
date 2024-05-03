<script lang="ts" setup>
import { computed, provide } from 'vue';
import { createNamespace } from '../../../utils/createNamespace';
import { YkRadioGroupProps, YkRadioGroupContextKey } from './radio';

const { BEM } = createNamespace('radio');

// received props
const props = defineProps<YkRadioGroupProps>();

// method
const emit = defineEmits(['update:modelValue', 'change']);
const activeLabel = computed<string | number | boolean>({
  get: () => props.modelValue,
  set: (value: string | number | boolean) => {
    emit('update:modelValue', value);
  },
});

const handleChange = (value: string | number | boolean) => {
  activeLabel.value = value;
  emit('change', value);
};

provide(YkRadioGroupContextKey, {
  activeLabel,
  disabled: props.disabled,
  fill: props.fill,
  textColor: props.textColor,
  handleChange,
});
</script>

<script lang="ts"></script>

<template>
  <div :class="[BEM()]">
    <slot />
  </div>
</template>

<style lang="less" scoped>
@N: .yk-radio;

@{N} {
  --yk-radio-size: 14px;
  --yk-rodio-checked-bg-color: var(--yk-color-primary);
  --yk-radio-checked-text-color: var(--yk-rodio-checked-bg-color);
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 32px;
  height: 32px;

  &:last-child {
    margin-right: 0;
  }

  &.is-checked {
    @{N}__inner {
      background-color: var(--yk-rodio-checked-bg-color);

      &::after {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    @{N}__label {
      color: var(--yk-radio-checked-text-color, --yk-color-primary);
    }

    &.is-disabled {
      @{N}__inner {
        background-color: var(--yk-disabled-bg-color);

        &::after {
          background-color: var(--yk-disabled-text-color);
        }
      }

      @{N}__label {
        color: var(--yk-disabled-text-color);
      }
    }

    &.is-bordered {
      border-color: var(--yk-rodio-checked-bg-color, --yk-color-primary);
    }
  }

  &.is-bordered {
    padding: 0 15px 0 9px;
    border: var(--yk-border);
    border-radius: var(--yk-radius-base);
  }

  &.is-disabled {
    cursor: not-allowed;

    @{N}__inner {
      border-color: var(--yk-disabled-border-color);
    }

    @{N}__label {
      color: var(--yk-disabled-text-color);
    }

    &.is-bordered {
      border-color: var(--yk-disabled-border-color);
    }
  }

  &__input {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__original {
    opacity: 0;
    outline: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
  }

  &__inner {
    position: relative;
    width: var(--yk-radio-size);
    height: var(--yk-radio-size);
    border-radius: 50%;
    border: var(--yk-border);
    transition: background-color var(--yk-transition-duration);

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all var(--yk-transition-duration);
    }
  }

  &__label {
    padding-left: 8px;
  }
}
</style>
