import { App, Plugin } from 'vue';

import '../style/global.less';
import { ExamplePlugin } from './example';
import { IconPlugin } from './icon';
import { ButtonPlugin } from './button';
import { FlexPlugin } from './flex';
import { RowPlugin } from './row';
import { ColPlugin } from './col';
import { RadioPlugin } from './radio';
import { SelectPlugin } from './select';
import { CheckoutboxPlugin } from './checkbox';
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
    FlexPlugin.install?.(app);
    RowPlugin.install?.(app);
    ColPlugin.install?.(app);
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
export * from './flex';
export * from './row';
export * from './col';
export * from './radio';
export * from './select';
export * from './checkbox';
export * from './cascader';
export * from './spin';
export * from './popover';
export * from './message';
export * from './pagination';
export * from './empty';
export * from './table';
