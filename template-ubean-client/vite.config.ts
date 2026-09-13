import { defineConfig } from 'vite-plus';
import vue from '@vitejs/plugin-vue';
import { ubeanVueVite } from '@ubean/vue/vite';

/**
 * 独立 SPA 构建配置 —— @ubean/vue 精简内核 + 文件式路由:
 * - 纯 Vite + @vitejs/plugin-vue,无自动引入、无 i18n、无 SSR
 * - `ubeanVueVite()` 覆盖:
 *   - 文件路由约定:动态参数 `[id=numeric]`、catch-all `[...slug]`、
 *     reuse `.reuse.ts`、特殊页 404/loading/error
 *   - `markdown: true` —— md + mdx 页面(@ubean/markdown 按需加载)
 *   - `head: true` —— definePage/frontmatter 的 head 提取到 route.meta.head
 * - 路由实例由 src/main.ts 用 vue-router 原生 createRouter 创建
 */
export default defineConfig({
  resolve: {
    tsconfigPaths: true
  },
  plugins: [vue(), ubeanVueVite({ markdown: true, head: true })]
});
