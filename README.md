# create-soybean

简体中文 | [English](./README.en_US.md)

[SoybeanJS](https://github.com/soybeanjs) 官方脚手架工具，用于快速创建不同类型的项目模板。

## 使用方式

**npm**

```bash
npm create soybean@latest
```

**pnpm**

```bash
pnpm create soybean@latest
```

**yarn**

```bash
yarn create soybean@latest
```

**bun**

```bash
bun create soybean@latest
```

也可以直接指定项目名称和模板：

```bash
# 指定项目目录
npm create soybean@latest my-project

# 指定模板
npm create soybean@latest my-project -- --template vue
```

## 可用模板

| 模板           | 描述                               |
| -------------- | ---------------------------------- |
| `ts-lib`       | TypeScript 库                      |
| `vue`          | Vue 3 项目                         |
| `vue-lib`      | Vue 3 + TypeScript 库              |
| `ubean`        | ubean 全栈应用（SSR/Islands/i18n） |
| `ubean-client` | ubean 纯客户端 SPA                 |

## License

[MIT](./LICENSE)
