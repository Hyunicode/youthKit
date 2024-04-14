import { defineConfig } from 'vitepress';
  
  // https://vitepress.dev/reference/site-config
  export default defineConfig({
  "title": "YouthKit",
  "description": "A Vue 3 Component Library",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/youthKit.png"
      }
    ]
  ],
  "themeConfig": {
    "logo": "/youthKit.png",
    "nav": [
      {
        "text": "Home",
        "link": "/"
      },
      {
        "text": "Components",
        "link": "/components/example/README",
        "activeMatch": "^/components/"
      }
    ],
    "sidebar": [
      {
        "text": "Basic",
        "items": [
          {
            "text": "example示例",
            "link": "/components/example/README"
          }
        ]
      }
    ],
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/hyunicode/youthKit"
      }
    ],
    "footer": {
      "message": "Released under the MIT License. (dev)",
      "copyright": "Copyright © 2023-present hyunicode"
    }
  },
  "lastUpdated": true,
  "cleanUrls": true
});