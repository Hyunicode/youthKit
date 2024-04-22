import { App, Plugin } from 'vue';

import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    IconPlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
export * from './icon';
