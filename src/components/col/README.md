<script setup>
import demo from './docs/demo.vue';
import resp from './docs/resp.vue';

</script>

# 示例

> 这是 youthKit 的 Grid 组件
> Grid 组件用于布局，将页面分割成等宽的列，支持响应式布局。
> 基于 row 和 col 的概念, 通过 row 定义行，通过 col 定义列，实现页面布局。

## 基础用法

- 基础栅格
  <ClientOnly><demo /></ClientOnly>

  ::: details source

  <<< ./docs/demo.vue

  :::

- 响应式栅格
  <ClientOnly><resp /></ClientOnly>

  ::: details source

  <<< ./docs/resp.vue

  :::

## 属性

### Row

|  参数   | 说明 <img width=20/> |                               类型 <img width=300/>                               | 默认值  |  必传   |
| :-----: | :------------------: | :-------------------------------------------------------------------------------: | :-----: | :-----: |
|  width  |        行宽度        |                               `string` \| `number`                                | `auto`  | `false` |
| gutter  |      栅格间隔，      |                   `number` \| [responsiveType](#responsivetype)                   |   `0`   | `false` |
|  wrap   |     是否自动换行     |                                     `boolean`                                     | `false` | `false` |
|  align  |     垂直对齐方式     |                    `top` \| `middle` \| `bottom` \| `stretch`                     |  `top`  | `false` |
| justify |     水平排列方式     | `start` \| `end` \| `center`\|`space-around` \| `space-between` \| `space-evenly` | `start` | `false` |

### responsiveType

| 名称 |         说明         |   类型   |  必传   |
| :--: | :------------------: | :------: | :-----: |
|  xs  | `<576px` 响应式栅格  | `number` | `false` |
|  sm  | `≥576px` 响应式栅格  | `number` | `false` |
|  md  | `≥768px` 响应式栅格  | `number` | `false` |
|  lg  | `≥992px` 响应式栅格  | `number` | `false` |
|  xl  | `≥1200px` 响应式栅格 | `number` | `false` |
| xxl  | `≥1600px` 响应式栅格 | `number` | `false` |

### Col

|  参数  |         说明         |                       类型                        |   默认值    |  必传   |
| :----: | :------------------: | :-----------------------------------------------: | :---------: | :-----: |
|  span  |     栅格占位格数     |                     `number`                      |    `24`     | `false` |
| offset |  栅格左侧的间隔格数  |                     `number`                      |     `0`     | `false` |
|  flex  |      flex basic      |               `string` \| `number`                |   `auto`    | `false` |
|  flex  |   `flex` 布局填充    |               `string` \| `number`                |     ''      | `false` |
|   xs   | `<576px` 响应式栅格  | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
|   sm   | `≥576px` 响应式栅格  | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
|   md   | `≥768px` 响应式栅格  | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
|   lg   | `≥992px` 响应式栅格  | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
|   xl   | `≥1200px` 响应式栅格 | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
|  xxl   | `≥1600px` 响应式栅格 | `number` \| `{span: number&#44; offset?: number}` | `undefined` | `false` |
