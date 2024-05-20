<script setup>
import demo from './docs/demo.vue'

</script>

# Cascader 级联选择器

> 级联选择器: 逐级查看并选中层级选项

<demo />
::: details source

<<< ./docs/demo.vue

:::

## 基础用法

## 属性

|  参数  | 说明       |  类型  | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :----: | :--------- | :----: | :-------------------: | :-------------------: | :-----------------: |
| `text` | 显示的文本 | string |           -           |           -           |         是          |

## 事件

| 事件名  |   说明   | 参数列表 | 参数说明 <img width=300/> |
| :-----: | :------: | :------: | :-----------------------: |
| `click` | 点击事件 | `event`  |       `MouseEvent`        |