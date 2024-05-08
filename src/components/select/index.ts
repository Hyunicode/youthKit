import { App, Plugin } from 'vue';
import YkSelect, { YkSelectProps } from './src/select.vue';

export const SelectPlugin: Plugin = {
  install(app: App) {
    app.component('yk-select', YkSelect);
  },
};

export { YkSelect };
export type { YkSelectProps };
