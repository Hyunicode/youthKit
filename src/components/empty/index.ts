import { App, Plugin } from 'vue';
import YkEmpty, { YkEmptyProps } from './src/empty.vue';

export const EmptyPlugin: Plugin = {
  install(app: App) {
    app.component('yk-empty', YkEmpty);
  },
};

export { YkEmpty };
export type { YkEmptyProps };
