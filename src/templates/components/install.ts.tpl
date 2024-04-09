import { App, Plugin } from 'vue';
import Yk{{name}}, { Yk{{name}}Props } from './src/{{lowercase name}}.vue';

export const {{name}}Plugin: Plugin = {
  install(app: App) {
    app.component('yk-{{lowercase name}}', Yk{{name}});
  },
};

export { Yk{{name}} };
export type { Yk{{name}}Props };
