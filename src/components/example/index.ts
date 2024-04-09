import { App, Plugin } from 'vue';
import YkExample, { YkExampleProps } from './src/example.vue';

export const ExamplePlugin: Plugin = {
  install(app: App) {
    app.component('yk-example', YkExample);
  },
};

export { YkExample };
export type { YkExampleProps };
