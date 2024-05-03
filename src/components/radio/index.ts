import { App, Plugin } from 'vue';
import YkRadio from './src/radio.vue';
import YkRadioGroup from './src/radio-group.vue';
import type { YkRadioProps, YkRadioGroupProps } from './src/radio';

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('yk-radio', YkRadio);
    app.component('yk-radio-group', YkRadioGroup);
  },
};

export { YkRadio, YkRadioGroup };
export type { YkRadioProps, YkRadioGroupProps };
