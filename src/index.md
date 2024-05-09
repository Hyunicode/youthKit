---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'youthKit'
  text: '基于 Vue3 和 TypeScript 的组件库'
  image: '/youthKit.png'
  tagline: 体积小巧, 快速响应
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/hyunicode/youthKit
    - theme: alt
      text: 快速上手
      link: /components/example/README

features:
  - icon: 📃
    title: eslint, husky, lint-staged, ...
    details: <font size='3'>从代码编写到提交, 你只需关注业务逻辑, 其他全交给工具</font> <br> <font color='grey' size='1'>整齐的代码看起来更舒服, 不是吗</font>
  - icon: 📦
    title: 命令式生成组件模板
    details: <font size='3'>yarn new 一下, 一键生成组件本体, 文档站, 组件测试模板</font> <br> <font color='grey' size='1'>用起来是有点爽的</font>
  - icon: ☁️
    title: 体积小巧
    details: <font size='3'>基于 Vue3 开发, tree-shaking加持, 支持全局导入和按需引用</font> <br> <font color='grey' size='1'>他们说我是 麻雀虽小, 五脏俱全</font>
  - icon: ⚡️
    title: 渲染快速
    details: <font size='3'>尽量渲染快一点, 因为我引入的依赖项很少</font> <br> <font color='grey' size='1'>快吗? 快就对了!</font>
  - icon: ⚙️
    title: 使用TypeScript
    details: <font size='3'>全面拥抱TypeScript, 支持更好的 intellisense</font> <br> <font color='grey' size='1'>写代码的时候, 有提示是一种幸福</font>
  - icon: 📖
    title: 完善的文档
    details: <font size='3'>基于 VitePress 生成的文档站, 文档即时更新, 紧跟开发脚步</font> <br> <font color='grey' size='1'>想学啊你? 我教你啊</font>
  - icon: 🎨
    title: 基于 Less
    details: <font size='3'>统一的样式变量, 支持引入自定义样式覆盖</font> <br> <font color='grey' size='1'>可以给你点颜色瞧瞧</font>
  - icon: 🎛️
    title: 完备的单元测试
    details: <font size='3'>基于 Vitest 的单元测试, 保证组件的稳定性</font> <br> <font color='grey' size='1'>测过了用起来才放心</font>
---
