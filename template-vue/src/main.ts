import { createApp } from 'vue';
import '@soybeanjs/ui/styles.css';
import 'uno.css';
import App from './App.vue';

async function setupApp() {
  const app = createApp(App);

  app.mount('#app');
}

setupApp();
