import { App, Plugin } from 'vue';
import YkMessage, { YkMessageProps } from './src/message.vue';

export const MessagePlugin: Plugin = {
  install(app: App) {
    app.component('yk-message', YkMessage);
  },
};

export { YkMessage };
export type { YkMessageProps };
