import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite-plus';
import Vue from '@vitejs/plugin-vue';
import VueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import Unocss from 'unocss/vite';
import { lint, fmt } from '@soybeanjs/oxc-config';
import UiResolver from '@soybeanjs/ui/resolver';

export default defineConfig({
  staged: {
    '*': 'vp check --fix'
  },
  fmt,
  lint,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    Vue(),
    VueJsx(),
    Unocss(),
    Components({
      dts: 'src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [UiResolver()]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 9527,
    open: true
  }
});
