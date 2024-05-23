# youthKit

> 基于 Vue3 和 TypeScript 的轻量级组件库

### 技术栈

- Vue3@^3.4.21
- TypeScript@^5.2.2
- Vite@^5.2.8
- Less@^4.2.0
- VitePress@^1.0.2
- Vitest@^1.4.0

### 文档站

- [youthKit: 基于 Vue3 的轻量级组件库](https://youth-kit-scut.vercel.app/)

### 特性

- 📰使用eslint, husky, lint-staged等工具, 保证代码质量
- 📦命令式生成组件模板, 一键生成组件本体, 文档站, 组件测试模板
- 🪶体积小巧, 支持全局导入和按需引用
- ⚡️渲染快速, 尽量少的依赖项
- ⚙️全量使用TypeScript, 支持更好的 intellisense
- 📖完善的文档, 文档即时更新
- 🎨基于 Less 的主题变量, 可以自由覆盖
- 🎛️完备的单元测试, 保证组件的稳定性

### 安装

```bash
# install
npm install youth-kit
# or
yarn add youth-kit
# or
pnpm add youth-kit
# ... other package manager
```

### 使用

```ts
// 全局导入
import { createApp } from 'vue';
import App from './App.vue';
import youthKit from 'youth-kit';

const app = createApp(App);
app.use(youthKit);

// 按需导入
import { yk-button } from 'youth-kit';
<yk-button>按钮</yk-button>
```

### 开发

```bash
# clone
git clone git@github.com:hyunicode/youthKit.git

# install dependencies
cd youthKit
yarn

# new component
yarn new

# dev
yarn docs:dev

# build
yarn build
```
