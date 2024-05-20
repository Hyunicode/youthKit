<script setup>
import basic from './docs/basic.vue'
import loading from './docs/loading.vue'
import empty from './docs/empty.vue'

</script>

# Table 表格

> 表格: 用于展示结构化数据; 支持分页、加载中、空状态等

## 基础用法

- 默认显示分页, 支持分页获取数据
  <basic />
  ::: details source

  <<< ./docs/basic.vue

  :::

- 加载中
  <loading />
  ::: details source

  <<< ./docs/loading.vue

  :::

- 空状态
  <empty />
  ::: details source

  <<< ./docs/empty.vue

  :::

## 属性

| 参数<img width=60/> | 说明 <img width=100/> |        类型<img width=200/>         | 可选值<img width=60/> |   默认值<img width=200/>    | 必填<img width=40/> |
| :-----------------: | :-------------------- | :---------------------------------: | :-------------------: | :-------------------------: | :-----------------: |
|     dataSource      | 数据源                |       `Record<string, any>[]`       |           -           |              -              |         是          |
|       columns       | 列配置                |    [ColumnProps[]](#columnprops)    |           -           |              -              |         是          |
|   showPagination    | 是否显示分页          |              `boolean`              |    `trur`\|`false`    |           `true`            |         否          |
|     pagination      | 分页配置              | [PaginationProps](#paginationprops) |           -           | `{ page: 1, pageSize: 10 }` |         否          |
|        total        | 数据总数              |              `number`               |           -           |             `0`             |         否          |
|       loading       | 加载中状态            |              `boolean`              |    `true`\|`false`    |           `false`           |         否          |

### ColumnProps

| 参数<img width=60/> | 说明 <img width=160/>  |  类型<img width=150/>   | 必填<img width=40/> | 默认值<img width=60/> |
| :-----------------: | :--------------------- | :---------------------: | :-----------------: | :-------------------: |
|        title        | 列头标题               |        `string`         |         是          |           -           |
|      dataIndex      | 列数据在数据项中的索引 |        `string`         |         是          |           -           |
|        width        | 列宽度                 |        `number`         |         否          |          30           |
|        slot         | 自定义渲染             | `Component` \| `string` |         否          |           -           |

### PaginationProps

| 参数<img width=60/> | 说明 <img width=160/> | 类型<img width=150/> | 必填<img width=40/> | 默认值<img width=60/> |
| :-----------------: | :-------------------- | :------------------: | :-----------------: | :-------------------: |
|       current       | 当前页                |       `number`       |         否          |           1           |
|      pageSize       | 分页大小              |       `number`       |         否          |          10           |

## 事件

|  事件名  | 说明<img width=100/> | 参数列表<img width=150/> | 参数说明 <img width=200/> |
| :------: | :------------------: | :----------------------: | :-----------------------: |
| `change` |     更改页码事件     |   {`page`, `pageSize`}   |  跳转目标页码, 分页大小   |
