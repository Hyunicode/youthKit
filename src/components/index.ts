import { App, Plugin } from 'vue';

import { ExamplePlugin } from './example';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
