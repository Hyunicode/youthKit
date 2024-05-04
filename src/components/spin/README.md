<script setup>
import basic from './docs/basic.vue'
import size from './docs/size.vue'
import content from './docs/desc.vue'


</script>

# Spin 加载中

> 加载中: loading... 可能可以缓解焦虑

## 基础用法

- 三种加载图标

  <basic />

  ::: details source

  <<< ./docs/basic.vue

  :::

- 加载图标大小

  <size />

  ::: details source

  <<< ./docs/size.vue

  :::

- desc文字描述

  <content />

  ::: details source

  <<< ./docs/desc.vue

  :::

## 属性

|    参数    | 说明     |   类型    | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :--------: | :------- | :-------: | :-------------------: | :-------------------: | :-----------------: |
|   `type`   | 状态类型 | `string`  | [spinType](#spintype) |       `default`       |         否          |
|   `size`   | 图标大小 | `string`  | [spinSize](#spinsize) |       `normal`        |         否          |
| `spinning` | 加载状态 | `boolean` |   `true` \| `false`   |        `true`         |         否          |
|   `desc`   | 文字内容 | `string`  |           -           |           -           |         否          |
|  `color`   | 图标颜色 | `string`  |      `colorList`      |           -           |         否          |

### spinType

|    值     | 说明       |
| :-------: | :--------- |
|   `dot`   | 点状加载   |
| `circle`  | 四分之一圆 |
| `dynamic` | 动态圆形   |

### spinSize

|    值    | 说明     |
| :------: | :------- |
| `normal` | 默认大小 |
| `small`  | 小图标   |
| `large`  | 大图标   |
