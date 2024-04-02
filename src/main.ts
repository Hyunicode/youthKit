import { createApp } from 'vue';
import App from './App.vue';
import { youthKitPlugin } from './components';

createApp(App).use(youthKitPlugin).mount('#app');
