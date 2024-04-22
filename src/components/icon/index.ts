import { App, Plugin } from 'vue';
import YkIcon, { YkIconProps } from './src/icon.vue';

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('yk-icon', YkIcon);
  },
};

export { YkIcon };
export type { YkIconProps };
