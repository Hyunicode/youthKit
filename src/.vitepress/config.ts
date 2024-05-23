import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'YouthKit',
  description: 'A Vue 3 Component Library',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/youthKit.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/youthKit.png',
    nav: [
      {
        text: '主页',
        link: '/',
      },
      {
        text: '组件',
        link: '/components/table/README',
        activeMatch: '^/components/',
      },
    ],
    sidebar: [
      {
        text: 'Basic',
        items: [
          {
            text: 'example示例',
            link: '/components/example/README',
          },
          {
            text: 'icon图标',
            link: '/components/icon/README',
          },
          {
            text: 'button按钮',
            link: '/components/button/README',
          },
          {
            text: 'grid网格布局',
            link: '/components/col/README',
          },
          {
            text: 'flex弹性布局',
            link: '/components/flex/README',
          },
        ],
      },
      {
        text: 'Form',
        items: [
          {
            text: 'radio单选框',
            link: '/components/radio/README',
          },
          {
            text: 'select选择器',
            link: '/components/select/README',
          },
          {
            text: 'checkbox多选器',
            link: '/components/checkbox/README',
          },
          {
            text: 'cascader级联选择器',
            link: '/components/cascader/README',
          },
        ],
      },
      {
        text: 'Feedback',
        items: [
          {
            text: 'spin加载中',
            link: '/components/spin/README',
          },
          {
            text: 'popover气泡卡片',
            link: '/components/popover/README',
          },
          {
            text: 'message消息提示',
            link: '/components/message/README',
          },
        ],
      },
      {
        text: 'Data',
        items: [
          {
            text: 'pagination分页',
            link: '/components/pagination/README',
          },
          {
            text: 'empty空状态',
            link: '/components/empty/README',
          },
          {
            text: 'table列表',
            link: '/components/table/README',
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hyunicode/youthKit',
      },
    ],
    footer: {
      message: 'Released under the MIT License. (dev)',
      copyright: 'Copyright © 2023-present hyunicode',
    },
  },
  cleanUrls: true,
});
