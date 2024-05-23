<script setup>
import demo from './docs/demo.vue'
import align from './docs/align.vue'

</script>

# Flex 弹性布局

> 弹性布局: 提供水平和垂直方向的响应式布局

## 基础用法

- 基础排列

  <demo />
  ::: details source

  <<< ./docs/demo.vue

  :::

- 对齐方式

  <align />
  ::: details source

  <<< ./docs/align.vue

  :::

## 属性

|   参数   |                                              说明 <img width=80 />                                               |                         类型                         |   默认值    |  必传   |
| :------: | :--------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------: | :---------: | :-----: |
|  width   |                                                    区域总宽度                                                    |                 `string`\| `number`                  |   `auto`    | `false` |
| vertical |                                                 `flex` 主轴方向                                                  |                      `boolean`                       |   `false`   | `false` |
|   wrap   |          单行或多行显示；参考 [`flex-wrap`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-wrap)          |          `nowrap`\| `wrap`\| `wrap-reverse`          |  `nowrap`   | `false` |
| justify  | 主轴方向上的对齐方式；参考 [`justify-content`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content) |                       `string`                       |  `normal`   | `false` |
|  align   |    交叉轴方向上的对齐方式；参考 [`align-items`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)    |                       `string`                       |  `normal`   | `false` |
|   gap    |                              设置网格之间的间隙，数组时表示: `[水平间距, 垂直间距]`                              | `number`\| `number[]`\| `small`\| `middle`\| `large` | `undefined` | `false` |

<!-- 正则, 将 'xxxx'  替换为  `xxxx`-->
<!-- reg: /'([^']+)'/g -->
<!-- replace: `'$1'` -->
