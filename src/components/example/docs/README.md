<script setup>
import demo from './demo.vue'
import example from '../src/example.vue';


</script>

# 示例

<demo />

这是 youthKit 的 example 组件

## 基础用法

<demo />
::: details source
<<< ../docs/demo.vue
:::

## 属性

<style>
table th:first-of-type {
    width: 4cm;
}
table th:nth-of-type(2) {
    width: 200pt;
}
table th:nth-of-type(3) {
    width: 8em;
}
</style>

|  参数  | 说明       |  类型  | 可选值<img width=60/> |  默认值   | 必填<img width=40/> |
| :----: | :--------- | :----: | :-------------------: | :-------: | :-----------------: |
| `arg1` | 第一个参数 | string |           -           | `default` |         否          |
| `arg2` | 第二个参数 | string |           -           | `default` |         否          |

## 事件

|    事件名     |    说明    | 参数列表  |    参数说明 <img width=300/>    |
| :-----------: | :--------: | :-------: | :-----------------------------: |
|    `click`    |  点击事件  |  $event   |        原生的 dom event         |
| `customEvent` | 自定义事件 | [a, b, c] | a：参数一；b：参数二；c：参数三 |
