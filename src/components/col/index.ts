import { App, Plugin } from 'vue';
import YkCol, { YkColProps } from './src/col.vue';

export const ColPlugin: Plugin = {
  install(app: App) {
    app.component('yk-col', YkCol);
  },
};

export { YkCol };
export type { YkColProps };
