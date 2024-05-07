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
        text: 'Home',
        link: '/',
      },
      {
        text: 'Components',
        link: '/components/example/README',
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
        ],
      },
      {
        text: 'Form',
        items: [
          {
            text: 'radio单选框',
            link: '/components/radio/README',
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
