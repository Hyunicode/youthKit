import { App, Plugin } from 'vue';
import YkRow from './src/row.vue';

export const RowPlugin: Plugin = {
  install(app: App) {
    app.component('yk-row', YkRow);
  },
};

export { YkRow };
