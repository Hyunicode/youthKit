import { createApp } from 'vue';
import App from './App.vue';
import YouthKitPlugin from './packages';
import router from './router';

createApp(App).use(YouthKitPlugin).use(router).mount('#app');
