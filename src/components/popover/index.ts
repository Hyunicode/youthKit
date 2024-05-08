import { App, Plugin } from 'vue';
import YkPopover, { YkPopoverProps } from './src/popover.vue';

export const PopoverPlugin: Plugin = {
  install(app: App) {
    app.component('yk-popover', YkPopover);
  },
};

export { YkPopover };
export type { YkPopoverProps };
