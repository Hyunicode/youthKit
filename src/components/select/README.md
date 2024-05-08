<script setup>
import demo from './docs/demo.vue'

</script>

# Select 选择器

> 选择器: 使用下拉菜单展示选项以供选择

## 基础用法

<demo />
::: details source

<<< ./docs/demo.vue

:::

## 属性

| 参数        | 说明                                         | 类型                             | 默认值   | 必传  |
| ----------- | -------------------------------------------- | -------------------------------- | -------- | ----- |
| options     | 选项数据                                     | [Option[]](#optiontype)          | []       | false |
| label       | 选项的 `label` 文本字段名                    | string                           | 'label'  | false |
| value       | 选项的 `value` 值字段名                      | string                           | 'value'  | false |
| placeholder | 选择框默认文字                               | string                           | '请选择' | false |
| disabled    | 是否禁用                                     | boolean                          | false    | false |
| allowClear  | 是否支持清除                                 | boolean                          | false    | false |
| search      | 是否支持搜索                                 | boolean                          | false    | false |
| filter      | [说明](#filter)                              | Function &#124; true             | true     | false |
| width       | 宽度，单位`px`                               | number                           | 120      | false |
| height      | 高度，单位`px`                               | number                           | 32       | false |
| maxDisplay  | 下拉面板最多能展示的下拉项数，超过后滚动显示 | number                           | 6        | false |
| modelValue  | 当前选中的 `option` 条目                     | number &#124; string &#124; null | null     | false |

### filter

> 过滤条件函数，仅当支持搜索时生效，根据输入项进行筛选

<ul>
  <li>默认为 `true` 时，筛选每个选项的文本字段 `label` 是否包含输入项，包含返回 `true`，反之返回 `false`</li>
  <li>当其为函数 `Function` 时，接受 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`</li>
</ul>

### optionType

| 名称               | 说明                                                   | 类型                 | 必传  |
| ------------------ | ------------------------------------------------------ | -------------------- | ----- |
| label              | 选项名                                                 | string               | false |
| value              | 选项值                                                 | string &#124; number | false |
| disabled           | 是否禁用选项                                           | boolean              | false |
| [propName: string] | 添加一个字符串索引签名，用于包含带有任意数量的其他属性 | any                  | false |

## 事件

| 事件名称 | 说明               | 参数                                                                |
| -------- | ------------------ | ------------------------------------------------------------------- |
| change   | 选项值改变后的回调 | (value: string &#124; number, label: string, index: number) => void |
