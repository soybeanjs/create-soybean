# template-ubean-client

基于 [@ubean/vue](https://github.com/soybeanjs/ubean) 的独立 SPA(纯客户端)模板：精简内核 + 文件式路由，无 SSR、无自动引入，全部显式导入。

## 使用

```bash
pnpm install
pnpm dev
```

## 演示内容

- 文件式路由: `src/pages/`(动态参数 `[id=numeric]`、catch-all `[...slug]`、reuse `.reuse.ts`、特殊页 `404.vue`)
- 页面级 head: `definePage({ head })` 提取到 route.meta(@unhead/vue 懒加载)
- matcher 校验: `/users/abc` 会被守卫重定向到 404
- Markdown 页面: `guide.md`、`blog/[...slug].vue`(@ubean/markdown 按需加载)
- 路由实例: `src/main.ts` 用 vue-router 原生 `createRouter` 创建
