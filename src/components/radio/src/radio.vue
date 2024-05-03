<script lang="ts" setup>
import { computed, inject } from 'vue';
import { createNamespace } from '../../../utils/createNamespace';
import { YkRadioProps, YkRadioGroupContextKey } from './radio';

// received props
const props = defineProps<YkRadioProps>();

// method
const emit = defineEmits(['update:modelValue', 'change']);
const { BEM } = createNamespace('radio');
const ctx = inject(YkRadioGroupContextKey, undefined);
const checked = computed({
  get: () => (ctx ? ctx.activeLabel.value === props.label : props.modelValue === props.label),
  set: () => {
    if (ctx) {
      if (ctx && ctx.handleChange) {
        ctx.handleChange(props.label!);
      }
    } else {
      emit('update:modelValue', props.label);
    }
    emit('change', props.label);
  },
});
const disabled = computed(() => (ctx ? ctx.disabled || props.disabled : props.disabled));
const style = computed(
  () =>
    ctx && {
      '--yk-rodio-checked-bg-color': ctx.fill,
      '--yk-radio-checked-text-color': ctx.textColor,
    },
);
</script>

<script lang="ts"></script>

<template>
  <label
    :class="[BEM(), { 'is-checked': checked, 'is-disabled': disabled, 'is-bordered': border }]"
    :style="style"
  >
    <span :class="[BEM('input')]">
      <input v-model="checked" type="radio" :disabled="disabled" :class="BEM('original')" />
      <span :class="BEM('inner')"></span>
    </span>
    <span :class="[BEM('label')]">
      <slot />
    </span>
  </label>
</template>

<style lang="less" scoped>
@name: .yk-radio;

@{name} {
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
    @{name}__inner {
      background-color: var(--yk-rodio-checked-bg-color);

      &::after {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #fff;
      }
    }

    @{name}__label {
      color: var(--yk-radio-checked-text-color, --yk-color-primary);
    }

    &.is-disabled {
      @{name}__inner {
        background-color: var(--yk-disabled-bg-color);

        &::after {
          background-color: var(--yk-disabled-text-color);
        }
      }

      @{name}__label {
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

    @{name}__inner {
      border-color: var(--yk-disabled-border-color);
    }

    @{name}__label {
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
