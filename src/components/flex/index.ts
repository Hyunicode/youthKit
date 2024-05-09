import { App, Plugin } from 'vue';
import YkFlex, { YkFlexProps } from './src/flex.vue';

export const FlexPlugin: Plugin = {
  install(app: App) {
    app.component('yk-flex', YkFlex);
  },
};

export { YkFlex };
export type { YkFlexProps };
