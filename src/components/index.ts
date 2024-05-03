import { App, Plugin } from 'vue';

import '../style/global.less';
import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';
import { ButtonPlugin } from './button';
import { RadioPlugin } from './radio';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    IconPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
export * from './icon';
export * from './button';
export * from './radio';
