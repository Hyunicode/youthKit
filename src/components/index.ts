import { App, Plugin } from 'vue';

import '../style/global.less';
import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';
import { ButtonPlugin } from './button';
import { RadioPlugin } from './radio';
import { TablePlugin } from './table';
import { SpinPlugin } from './spin';
import { PopoverPlugin } from './popover';
import { MessagePlugin } from './message';
import { PaginationPlugin } from './pagination';
import { EmptyPlugin } from './empty';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    IconPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
    TablePlugin.install?.(app);
    SpinPlugin.install?.(app);
    PopoverPlugin.install?.(app);
    MessagePlugin.install?.(app);
    PaginationPlugin.install?.(app);
    EmptyPlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
export * from './icon';
export * from './button';
export * from './radio';
export * from './table';
export * from './spin';
export * from './popover';
export * from './message';
export * from './pagination';
export * from './empty';
