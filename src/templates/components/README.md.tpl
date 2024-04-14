<script setup>
import demo from './docs/demo.vue'

</script>

# {{name_cn}}

<demo />
::: details source

<<< ./docs/demo.vue

:::
这是 youthKit 的 {{name_cn}} 组件

## 基础用法

<yk-{{lowercase name}} text="基础用法"/>

## 属性

<style>
table th:first-of-type {
    width: 4cm;
}
table th:nth-of-type(2) {
    width: 200pt;
}
table th:nth-of-type(3)
 {
    width: 8em;
}
</style>

|  参数  | 说明       |  类型  | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :----: | :--------- | :----: | :-------------------: | :-------------------: | :-----------------: |
| `text` | 显示的文本 | string |           -           |           -           |         是          |

## 事件

| 事件名  |   说明   | 参数列表 | 参数说明 <img width=300/> |
| :-----: | :------: | :------: | :-----------------------: |
| `click` | 点击事件 | `event`  |       `MouseEvent`        |
