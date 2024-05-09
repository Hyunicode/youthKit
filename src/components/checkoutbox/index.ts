import { App, Plugin } from 'vue';
import YkCheckoutbox, { YkCheckoutboxProps } from './src/checkoutbox.vue';

export const CheckoutboxPlugin: Plugin = {
  install(app: App) {
    app.component('yk-checkoutbox', YkCheckoutbox);
  },
};

export { YkCheckoutbox };
export type { YkCheckoutboxProps };
