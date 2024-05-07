import { App, Plugin } from 'vue';
import YkPagination, { YkPaginationProps } from './src/pagination.vue';

export const PaginationPlugin: Plugin = {
  install(app: App) {
    app.component('yk-pagination', YkPagination);
  },
};

export { YkPagination };
export type { YkPaginationProps };
