import { App, Plugin } from 'vue';

import '../style/global.less';
import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';
import { ButtonPlugin } from './button';
import { RadioPlugin } from './radio';
import { SpinPlugin } from './spin';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    IconPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
    SpinPlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
export * from './icon';
export * from './button';
export * from './radio';
export * from './spin';
