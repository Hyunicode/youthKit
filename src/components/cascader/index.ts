import { App, Plugin } from 'vue';
import YkCascader, { YkCascaderProps } from './src/cascader.vue';

export const CascaderPlugin: Plugin = {
  install(app: App) {
    app.component('yk-cascader', YkCascader);
  },
};

export { YkCascader };
export type { YkCascaderProps };
