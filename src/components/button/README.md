<script setup>
import basic from './docs/basic.vue'
import icon from './docs/icon.vue'
import content from './docs/content.vue'

</script>

# Button 按钮

> 按钮: 无聊的时候可以按一下

## 基础用法

- 基本属性
  <basic />

::: details source

<<< ./docs/basic.vue

:::

- 图标按钮

  > 同时具有 icon 和 loading 时, icon 会被 loading 覆盖

  <icon />

::: details source

<<< ./docs/icon.vue

:::

- content属性

  > content 设计为自闭合标签传入文本内容, 会渲染为span标签, 并与 icon 产生 margin
  > <br/>
  > 同时支持插槽传入节点, 插槽会在 content 之后渲染, 为纯文本时不会与 icon 产生 margin

    <content />

::: details source

<<< ./docs/content.vue

:::

## 属性

|    参数     | 说明          |   类型    |  可选值<img width=120/>   | 默认值<img width=60/> | 必填<img width=40/> |
| :---------: | :------------ | :-------: | :-----------------------: | :-------------------: | :-----------------: |
|   `type`    | 按钮类型      | `string`  | [buttonType](#buttontype) |       `default`       |         否          |
|   `size`    | 按钮大小      | `string`  | [buttonSize](#buttonsize) |       `normal`        |         否          |
|   `icon`    | 图标名称      | `string`  |        `iconList`         |           -           |         否          |
|   `text`    | 文本类型      | `boolean` |     `true` \| `false`     |        `false`        |         否          |
|   `plain`   | 是否朴素按钮  | `boolean` |     `true` \| `false`     |        `false`        |         否          |
|   `round`   | 是否圆角按钮  | `boolean` |     `true` \| `false`     |        `false`        |         否          |
|  `circle`   | 是否圆形按钮  | `boolean` |     `true` \| `false`     |        `false`        |         否          |
|   `color`   | 按钮颜色      | `string`  |        `colorList`        |           -           |         否          |
| `textColor` | 文本颜色      | `string`  |        `colorList`        |           -           |         否          |
|  `loading`  | 是否loading态 | `boolean` |     `true` \| `false`     |        `false`        |         否          |
| `disabled`  | 是否禁用      | `boolean` |     `true` \| `false`     |        `false`        |         否          |
|  `content`  | 按钮文本内容  | `string`  |             -             |           -           |         否          |

### buttonType

|    值     | 说明     |
| :-------: | :------- |
| `default` | 默认类型 |
| `primary` | 主要类型 |
| `success` | 成功类型 |
| `warning` | 警告类型 |
| `danger`  | 危险类型 |
|  `info`   | 信息类型 |

### buttonSize

|    值    | 说明     |
| :------: | :------- |
| `normal` | 默认大小 |
| `small`  | 小按钮   |
| `large`  | 大按钮   |

## 事件

| 事件名  |   说明   | 参数列表 | 参数说明 <img width=300/> |
| :-----: | :------: | :------: | :-----------------------: |
| `click` | 点击事件 | `event`  |       `MouseEvent`        |
