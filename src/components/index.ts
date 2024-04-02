import { App, Plugin } from 'vue';

import { ExamplePlugin } from './example';

const youthKitPlugin: Plugin = {
  install(app: App) {
    app.use(ExamplePlugin);
  },
};

export { youthKitPlugin };

export * from './example';
