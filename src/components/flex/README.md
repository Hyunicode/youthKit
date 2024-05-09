<script setup>
import demo from './docs/demo.vue'

</script>

# Flex 弹性布局

> 弹性布局: 提供水平和垂直方向的响应式布局

<demo />
::: details source

<<< ./docs/demo.vue

:::

## 基础用法

<yk-flex text="基础用法"/>

## 属性

|  参数  | 说明       |  类型  | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :----: | :--------- | :----: | :-------------------: | :-------------------: | :-----------------: |
| `text` | 显示的文本 | string |           -           |           -           |         是          |

## 事件

| 事件名  |   说明   | 参数列表 | 参数说明 <img width=300/> |
| :-----: | :------: | :------: | :-----------------------: |
| `click` | 点击事件 | `event`  |       `MouseEvent`        |
