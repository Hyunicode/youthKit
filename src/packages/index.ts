import { App, Plugin } from 'vue';
import { Example, ExamplePlugin } from './example';

const YouthKitPlugin: Plugin = {
  install: (app: App) => {
    ExamplePlugin.install?.(app);
  },
};

export default YouthKitPlugin;
export { Example };
