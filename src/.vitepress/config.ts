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
        link: '/components/example/README',
        activeMatch: '^/components/',
      },
    ],
    sidebar: [
      {
        text: 'Basic基础类',
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
        ],
      },
      {
        text: 'Form表单类',
        items: [
          {
            text: 'radio单选框',
            link: '/components/radio/README',
          },

          {
            text: 'select选择器',
            link: '/components/select/README',
          },
        ],
      },
      {
        text: 'Feedback反馈类',
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
        text: 'Data数据类',
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
  lastUpdated: true,
  cleanUrls: true,
});
