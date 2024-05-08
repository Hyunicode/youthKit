import { App, Plugin } from 'vue';
import YkTable, { YkTableProps } from './src/table.vue';

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('yk-table', YkTable);
  },
};

export { YkTable };
export type { YkTableProps };
