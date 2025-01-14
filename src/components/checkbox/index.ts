import { App, Plugin } from 'vue';
import YkCheckoutbox, { YkCheckoutboxProps } from './src/checkbox.vue';

export const CheckoutboxPlugin: Plugin = {
  install(app: App) {
    app.component('yk-checkbox', YkCheckoutbox);
  },
};

export { YkCheckoutbox };
export type { YkCheckoutboxProps };
