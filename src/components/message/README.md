<script setup>
import demo from './docs/demo.vue'
import success from './docs/success.vue'

</script>

# Message 消息提示

> 消息提示: 全局的消息提示

## 基础用法

- 基础信息

  <demo />

  ::: details source

  <<< ./docs/demo.vue

  :::

- 成功提示

   <success />

  ::: details source

  <<< ./docs/success.vue

  :::

## 属性

| 参数     | 说明                         | 类型                 | 默认值 | 必传  |
| -------- | ---------------------------- | -------------------- | ------ | ----- |
| duration | 自动关闭的延时，单位`ms`     | number               | 3000   | false |
| top      | 消息距离顶部的位置，单位`px` | number &#124; string | 30     | false |

## 事件

| 事件名称 | 说明                 | 参数       |
| -------- | -------------------- | ---------- |
| close    | 关闭时触发的回调函数 | () => void |
