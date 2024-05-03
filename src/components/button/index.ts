import { App, Plugin } from 'vue';
import YkButton, { YkButtonProps } from './src/button.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('yk-button', YkButton);
  },
};

export { YkButton };
export type { YkButtonProps };
