import { App, Plugin } from 'vue';
import YkGrid, { YkGridProps } from './src/grid.vue';

export const GridPlugin: Plugin = {
  install(app: App) {
    app.component('yk-grid', YkGrid);
  },
};

export { YkGrid };
export type { YkGridProps };
