import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'YouthKit',
  description: 'A Vue 3 Component Library',
  head: [['link', { rel: 'icon', href: '/assets/youthKit.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/youthKit.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/example/docs/README.md' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          {
            text: 'example',
            link: '/components/example/docs/README.md',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/hyunicode/youthKit' }],
    footer: {
      message: 'Released under the MIT License. (dev)',
      copyright: 'Copyright © 2023-present hyunicode',
    },
  },
  lastUpdated: true,
  rewrites: {
    'components/:pkg/docs/(.*)': 'components/:pkg.md',
  },
  cleanUrls: true,
});
