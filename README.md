# create-soybean

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

| 模板         | 描述                                    |
| ------------ | --------------------------------------- |
| `tsdown`     | TypeScript 库（由 tsdown 构建）         |
| `vue`        | Vue 3 项目                              |
| `vue-tsdown` | Vue 3 + TypeScript 库（由 tsdown 构建） |

## License

[MIT](./LICENSE)
