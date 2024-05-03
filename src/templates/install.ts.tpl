import { App, Plugin } from 'vue';

import '../style/global.less';
{{#each flatList}}
import { {{this.name}}Plugin } from './{{this.lowerName}}';
{{/each}}

const youthKitPlugin: Plugin = {
  install(app: App) {
    {{#each flatList}}
    {{this.name}}Plugin.install?.(app);
    {{/each}}
  },
};

export { youthKitPlugin };

{{#each flatList}}
export * from './{{this.lowerName}}';
{{/each}}