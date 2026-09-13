# create-soybean

[简体中文](./README.md) | English

The official scaffolding tool by [SoybeanJS](https://github.com/soybeanjs) for quickly creating different project templates.

## Usage

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

You can also specify the project name and template directly:

```bash
# Specify project directory
npm create soybean@latest my-project

# Specify template
npm create soybean@latest my-project -- --template vue
```

## Available Templates

| Template       | Description                        |
| -------------- | ---------------------------------- |
| `ts-lib`       | TypeScript library                 |
| `vue`          | Vue 3 project                      |
| `vue-lib`      | Vue 3 + TypeScript library         |
| `ubean`        | ubean full-stack app (SSR/islands) |
| `ubean-client` | ubean client-only SPA              |

## License

[MIT](./LICENSE)
