# template-ubean

基于 [ubean](https://github.com/soybeanjs/ubean) 的全栈应用模板：文件式路由、SSR/Islands 架构、i18n、API 路由。

## 使用

```bash
pnpm install
pnpm dev
```

> 类型检查(`pnpm typecheck`)需先运行一次 `pnpm dev`,以生成 `.ubean/` 类型声明(该目录已在 .gitignore 中忽略)。

## 演示内容

- 页面路由: `src/pages/`(含嵌套布局 `src/layouts/`)
- Islands 架构: `src/components/islands/` + `/islands-test`
- API 路由: `src/routes/api/`(hello、users CRUD)
- 数据请求: `/data-fetch`
- i18n: `src/locales/`
