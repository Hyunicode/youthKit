<script setup>
import disabled from './docs/disabled.vue'
import border from './docs/border.vue'
import color from './docs/color.vue'

</script>

# Radio 单选框

> 单选框: 在一组互斥的备选项中进行单选

## 基础用法

- 禁用状态

> <disabled />
> ::: details source
> <<< ./docs/disabled.vue
> :::

- 边框风格

> <border />
> ::: details source
> <<< ./docs/border.vue
> :::

<br/>

- 自定义颜色

> <color />
> ::: details source
> <<< ./docs/color.vue
> :::

<br/>
<br/>

## 属性

- `Radio` 组件提供了以下属性

|    参数    | 说明 <img width=90/> |       类型 <img width=220/>       | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :--------: | :------------------- | :-------------------------------: | :-------------------: | :-------------------: | :-----------------: |
|  `value`   | 选项实际值           | `string` \| `number` \| `boolean` |           -           |           -           |         是          |
|  `label`   | 选项显示值           | `string` \| `number` \| `boolean` |           -           |           -           |         是          |
| `disabled` | 是否禁用             |             `boolean`             |           -           |        `false`        |         否          |
|  `border`  | 是否显示边框         |             `boolean`             |           -           |        `false`        |         否          |

<br/>

- `RadioGroup` 组件提供了以下属性

|    参数     | 说明 <img width=90/> | 类型 <img width=220/> | 可选值<img width=60/> | 默认值<img width=60/> | 必填<img width=40/> |
| :---------: | :------------------- | :-------------------: | :-------------------: | :-------------------: | :-----------------: |
| `disabled`  | 是否选项组           |       `boolean`       |           -           |        `false`        |         否          |
|   `fill`    | 自定义填充色         |       `string`        |           -           |           -           |         否          |
| `textColor` | 自定义文本色         |       `string`        |           -           |           -           |         否          |

## 事件

|  事件名  | 说明 <img width=120/> | 参数列表 |           参数说明 <img width=300/>           |
| :------: | :-------------------: | :------: | :-------------------------------------------: |
| `click`  | 点击事件, 传递给选项  | `event`  |                 `MouseEvent`                  |
| `change` |     选项改变事件      | `value`  | `string` \| `number` \| `boolean`, 选中后的值 |
