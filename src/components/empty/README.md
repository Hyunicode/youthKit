<script setup>
import basic from './docs/basic.vue'
import description from './docs/description.vue'
import imag from './docs/imag.vue'

</script>

# Empty 空状态

> 空状态: 总不能什么也没有吧

## 基础用法

- 有两种预设的空状态, 指定 `image` 属性为 `content` 或 `box`

  <basic />

  ::: details source

  <<< ./docs/basic.vue

  :::

- 可以为空状态指定文本`desc`属性, 接受一个字符串并显示在空状态下方

    <description />

  ::: details source

  <<< ./docs/description.vue

  :::

- 可以通过`image`属性指定一个图片地址

    <imag />

  ::: details source

  <<< ./docs/imag.vue

  :::

## 属性

|     参数     | 说明       |     类型      |     可选值<img width=60/>     | 默认值<img width=60/> | 必填<img width=40/> |
| :----------: | :--------- | :-----------: | :---------------------------: | :-------------------: | :-----------------: |
|   `image`    | 显示的图像 |    string     | `content` \|`box`\|`imageURL` |       `content`       |         否          |
|    `desc`    | 显示的文本 |    string     |               -               |           -           |         否          |
| `imageStyle` | 图像样式   | CSSProperties |               -               |           -           |         否          |
| `descStyle`  | 描述样式   | CSSProperties |               -               |           -           |         否          |
