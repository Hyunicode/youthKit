import fs from 'fs';
import path from 'path';
import { dirname } from 'node:path';
import Handlebars from 'handlebars';

const updater = () => {
  const componentList = JSON.parse(
    fs.readFileSync(path.resolve(dirname(''), 'src/components/components.json'), 'utf-8'),
  );
  const catagoriesList = Object.keys(componentList);
  const componentPath = path.resolve(dirname(''), 'src/templates/install.ts.tpl');
  const componentTpl = fs.readFileSync(componentPath, 'utf-8');
  const flatList = catagoriesList
    .map((catagory) => componentList[catagory])
    .flat()
    .map((component) => {
      return {
        lowerName: component.name.toLowerCase(),
        name: component.name,
      };
    });

  const installRes = Handlebars.compile(componentTpl)({ flatList });

  const sidebar = catagoriesList.map((catagory) => {
    const items = componentList[catagory].map((component) => {
      return {
        text: component.name.toLowerCase() + component.name_cn,
        link: `/components/${component.name.toLowerCase()}`,
      };
    });
    return {
      text: catagory.charAt(0).toUpperCase() + catagory.slice(1),
      items,
    };
  });

  const config = {
    title: 'YouthKit',
    description: 'A Vue 3 Component Library',
    head: [['link', { rel: 'icon', href: '/youthKit.png' }]],
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: '/youthKit.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Components', link: '/components/example', activeMatch: '^/components/' },
      ],
      sidebar: sidebar,
      socialLinks: [{ icon: 'github', link: 'https://github.com/hyunicode/youthKit' }],
      footer: {
        message: 'Released under the MIT License. (dev)',
        copyright: 'Copyright © 2023-present hyunicode',
      },
    },
    lastUpdated: true,
    cleanUrls: true,
    rewrites: {
      'components/:pkg/(.*)': 'components/:pkg.md',
    },
  };

  const configStr = `import { defineConfig } from 'vitepress';
  
  // https://vitepress.dev/reference/site-config
  export default defineConfig(${JSON.stringify(config, null, 2)});`;

  fs.writeFileSync(path.resolve(dirname(''), 'src/components/index.ts'), installRes);
  fs.writeFileSync(path.resolve(dirname(''), 'src/.vitepress/config.ts'), configStr);
};

export { updater };
