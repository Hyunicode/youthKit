import { App, Plugin } from 'vue';
import YkSpin, { YkSpinProps } from './src/spin.vue';

export const SpinPlugin: Plugin = {
  install(app: App) {
    app.component('yk-spin', YkSpin);
  },
};

export { YkSpin };
export type { YkSpinProps };
