import { App, Plugin } from 'vue';

import '../style/global.less';
import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';
import { ButtonPlugin } from './button';
import { GridPlugin } from './grid';
import { FlexPlugin } from './flex';
import { RadioPlugin } from './radio';
import { SelectPlugin } from './select';
import { CheckoutboxPlugin } from './checkoutbox';
import { CascaderPlugin } from './cascader';
import { SpinPlugin } from './spin';
import { PopoverPlugin } from './popover';
import { MessagePlugin } from './message';
import { PaginationPlugin } from './pagination';
import { EmptyPlugin } from './empty';
import { TablePlugin } from './table';

const youthKitPlugin: Plugin = {
  install(app: App) {
    ExamplePlugin.install?.(app);
    IconPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    GridPlugin.install?.(app);
    FlexPlugin.install?.(app);
    RadioPlugin.install?.(app);
    SelectPlugin.install?.(app);
    CheckoutboxPlugin.install?.(app);
    CascaderPlugin.install?.(app);
    SpinPlugin.install?.(app);
    PopoverPlugin.install?.(app);
    MessagePlugin.install?.(app);
    PaginationPlugin.install?.(app);
    EmptyPlugin.install?.(app);
    TablePlugin.install?.(app);
  },
};

export { youthKitPlugin };

export * from './example';
export * from './icon';
export * from './button';
export * from './grid';
export * from './flex';
export * from './radio';
export * from './select';
export * from './checkoutbox';
export * from './cascader';
export * from './spin';
export * from './popover';
export * from './message';
export * from './pagination';
export * from './empty';
export * from './table';
