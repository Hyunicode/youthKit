<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Slot, CSSProperties } from 'vue';

// eslint-disable-next-line @typescript-eslint/ban-types
function rafTimeout(fn: Function, delay = 0, interval = false): object {
  const requestAnimationFrame =
    typeof window !== 'undefined' ? window.requestAnimationFrame : () => {};
  let start: any = null;
  function timeElapse(timestamp: number) {
    /*
      timestamp参数：与performance.now()的返回值相同，它表示requestAnimationFrame() 开始去执行回调函数的时刻
    */
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed >= delay) {
      fn(); // 执行目标函数func
      if (interval) {
        // 使用间歇调用
        start = null;
        raf.id = requestAnimationFrame(timeElapse);
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse);
    }
  }
  const raf = {
    // 引用类型保存，方便获取 requestAnimationFrame()方法返回的 ID.
    id: requestAnimationFrame(timeElapse),
  };
  return raf;
}
// 用于取消 rafTimeout 函数
function cancelRaf(raf: { id: number }): void {
  const cancelAnimationFrame =
    typeof window !== 'undefined' ? window.cancelAnimationFrame : () => {};
  if (raf && raf.id) {
    cancelAnimationFrame(raf.id);
  }
}

const props = withDefaults(defineProps<YkPopoverProps>(), {
  title: '',
  content: '',
  maxWidth: 'auto',
  trigger: 'hover',
  overlayStyle: () => ({}),
});
const popMaxWidth = computed(() => {
  if (typeof props.maxWidth === 'number') {
    return props.maxWidth + 'px';
  }
  return props.maxWidth;
});
const visible = ref(false);
const top = ref(0); // 提示框top定位
const left = ref(0); // 提示框left定位
const defaultRef = ref(); // 声明一个同名的模板引用
const popRef = ref(); // 声明一个同名的模板引用
function getPosition() {
  const defaultWidth = defaultRef.value.offsetWidth; // 展示文本宽度
  const popWidth = popRef.value.offsetWidth; // 提示文本宽度
  const popHeight = popRef.value.offsetHeight; // 提示文本高度
  top.value = popHeight + 4;
  left.value = (popWidth - defaultWidth) / 2;
}
const emit = defineEmits(['openChange']);
const hideTimer = ref();
function onShow() {
  getPosition();
  cancelRaf(hideTimer.value);
  visible.value = true;
  emit('openChange', visible.value);
}
function onHide(): void {
  hideTimer.value = rafTimeout(() => {
    visible.value = false;
    emit('openChange', visible.value);
  }, 100);
}
const activeBlur = ref(false); // 是否激活 blur 事件
function onOpen() {
  visible.value = !visible.value;
  if (visible.value) {
    getPosition();
  }
  emit('openChange', visible.value);
}
function onEnter() {
  activeBlur.value = false;
}
function onLeave() {
  activeBlur.value = true;
  popRef.value.focus();
}
function onBlur() {
  visible.value = false;
  emit('openChange', false);
}
</script>

<script lang="ts">
export interface YkPopoverProps {
  title?: string | Slot; // 卡片标题
  content?: string | Slot; // 卡片内容
  maxWidth?: string | number; // 卡片内容最大宽度
  trigger?: 'hover' | 'click'; // 卡片触发方式
  overlayStyle?: CSSProperties; // 卡片样式
}
</script>

<template>
  <div
    class="yk-popover"
    @mouseenter="trigger === 'hover' ? onShow() : () => false"
    @mouseleave="trigger === 'hover' ? onHide() : () => false"
  >
    <div
      ref="popRef"
      tabindex="1"
      class="yk-pop-content"
      :class="{ 'show-pop': visible }"
      :style="`max-width: ${popMaxWidth}; top: ${-top}px; left: ${-left}px;`"
      @blur="trigger === 'click' && activeBlur ? onBlur() : () => false"
      @mouseenter="trigger === 'hover' ? onShow() : () => false"
      @mouseleave="trigger === 'hover' ? onHide() : () => false"
    >
      <div class="yk-pop" :style="overlayStyle">
        <div class="yk-title">
          <slot name="title">{{ title }}</slot>
        </div>
        <div class="yk-content">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
      <div class="yk-pop-arrow">
        <span class="u-pop-arrow"></span>
      </div>
    </div>
    <div
      ref="defaultRef"
      @click="trigger === 'click' ? onOpen() : () => false"
      @mouseenter="trigger === 'click' ? onEnter() : () => false"
      @mouseleave="trigger === 'click' ? onLeave() : () => false"
    >
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.yk-popover {
  position: relative;
  display: inline-block;
  .yk-pop-content {
    position: absolute;
    z-index: 999;
    width: max-content;
    padding-bottom: 12px;
    outline: none;
    pointer-events: none;
    opacity: 0;
    transform-origin: 50% 75%;
    transform: scale(0.8);
    transition:
      transform 0.25s,
      opacity 0.25s;
    .yk-pop {
      min-width: 32px;
      min-height: 32px;
      padding: 12px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.88);
      line-height: 1.5714285714285714;
      text-align: start;
      text-decoration: none;
      word-break: break-all;
      cursor: auto;
      user-select: text;
      background-color: #fff;
      border-radius: 8px;
      box-shadow:
        0 6px 16px 0 rgba(0, 0, 0, 0.08),
        0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 9px 28px 8px rgba(0, 0, 0, 0.05);
      .yk-title {
        min-width: 176px;
        margin-bottom: 8px;
        color: rgba(0, 0, 0, 0.88);
        font-weight: 600;
      }
      .yk-content {
        color: rgba(0, 0, 0, 0.88);
      }
    }
    .yk-pop-arrow {
      position: absolute;
      z-index: 9;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%) translateY(100%) rotate(180deg);
      display: block;
      pointer-events: none;
      width: 16px;
      height: 16px;
      overflow: hidden;
      &::before {
        position: absolute;
        bottom: 0;
        inset-inline-start: 0;
        width: 16px;
        height: 8px;
        background-color: #fff;
        clip-path: path(
          'M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z'
        );
        content: '';
      }
      &::after {
        position: absolute;
        width: 8.970562748477143px;
        height: 8.970562748477143px;
        bottom: 0;
        inset-inline: 0;
        margin: auto;
        border-radius: 0 0 2px 0;
        transform: translateY(50%) rotate(-135deg);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.1);
        z-index: 0;
        background: transparent;
        content: '';
      }
    }
  }
  .show-pop {
    pointer-events: auto;
    opacity: 1;
    transform: scale(1);
  }
}
</style>
requestAnimationFramerequestAnimationFramerequestAnimationFramecancelAnimationFrame
