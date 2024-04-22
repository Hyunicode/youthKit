<script setup>
import demo from './docs/demo.vue'

</script>

# Icon 图标

<demo />

::: details 代码
<<< ./docs/demo.vue{15}

:::
图标组件: 一般是用来看的

## 基础用法

##### loading状态

<div>
    <yk-icon style="margin: 20px" name="radio_button_partial" loading size='32'/>
    <yk-icon style="margin: 20px" name="autorenew" loading size='32'/>
    <yk-icon style="margin: 20px" name="clock_loader_10" loading size='32'/>
    <yk-icon style="margin: 20px" name="change_circle" loading size='32'/>
</div>

##### 自定义颜色

<div>
    <yk-icon style="margin: 20px" name="action_key" color="red" size='32'/>
    <yk-icon style="margin: 20px" name="browse_activity" color="blue" size='32'/>
    <yk-icon style="margin: 20px" name="all_match" color="green" size='32'/>
    <yk-icon style="margin: 20px" name="deployed_code" color="teal" size='32'/>
</div>

##### 自定义大小

<div>
    <yk-icon style="margin: 20px" name="chip_extraction" size='32'/>
    <yk-icon style="margin: 20px" name="chronic" size='48'/>
    <yk-icon style="margin: 20px" name="app_registration" size='64'/>
    <yk-icon style="margin: 20px" name="add_circle" size='96'/>
</div>

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

|   参数    | 说明 <img width=60/> |  类型   |     可选值<img width=160/>      | 默认值<img width=60/> | 必填<img width=40/> |
| :-------: | :------------------- | :-----: | :-----------------------------: | :-------------------: | :-----------------: |
|  `name`   | icon名字             | string  |           `iconList`            |           -           |         是          |
|  `size`   | icon大小             | string  | ['s', 'm', 'l', 'xl', `number`] |        24(px)         |         否          |
|  `color`  | icon的fill颜色       | string  |             `color`             |           -           |         否          |
| `loading` | 是否loading态        | boolean |          `true/false`           |        `false`        |         否          |

## 事件

| 事件名  |  说明 <img width=160/>   | 参数列表 <img width=60/> | 参数说明 <img width=160/> |
| :-----: | :----------------------: | :----------------------: | :-----------------------: |
| `click` | 点击事件, 传递给span元素 |         `event`          |       `MouseEvent`        |
