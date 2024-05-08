<script setup>
import demo from './docs/demo.vue'

</script>

# Popover 气泡卡片

> 气泡卡片: 弹出气泡式卡片展示更多信息

## 基础用法

<demo />
::: details source

<<< ./docs/demo.vue

:::

## 属性

| 参数         | 说明             | 类型                   | 默认值  | 必传  |
| ------------ | ---------------- | ---------------------- | ------- | ----- |
| title        | 卡片标题         | string &#124; slot     | ''      | false |
| content      | 卡片内容         | string &#124; slot     | ''      | false |
| maxWidth     | 卡片内容最大宽度 | string &#124; number   | 'auto'  | false |
| trigger      | 卡片触发方式     | 'hover' &#124; 'click' | 'hover' | false |
| overlayStyle | 卡片样式         | CSSProperties          | {}      | false |

## 事件

| 事件名称   | 说明           | 参数                       |
| ---------- | -------------- | -------------------------- |
| openChange | 显示隐藏的回调 | (visible: boolean) => void |
