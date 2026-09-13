import { createApp } from 'vue';
import './plugins/assets';
import { setupStore } from './store';
import { setupRouter } from './router';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  app.mount('#app');
}

setupApp();
