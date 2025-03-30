---
# Vue-Learning

## 📚 專案介紹
這是基於 **Vue 3 + Vite + TypeScript** 建立的學習型專案，包含基本的 Pinia、Vue Router、ESLint、Prettier 以及 E2E 測試（Playwright）等套件。
---

## 🚀 技術堆疊

### 📦 主要依賴

- **pinia**：^3.0.1
- **vue**：^3.5.13
- **vue-router**：^4.5.0

### 🛠️ 開發依賴

- **@playwright/test**：^1.51.0
- **@tsconfig/node22**：^22.0.0
- **@types/jsdom**：^21.1.7
- **@types/node**：^22.13.9
- **@vitejs/plugin-vue**：^5.2.1
- **@vitejs/plugin-vue-jsx**：^4.1.1
- **@vitest/eslint-plugin**：^1.1.36
- **@vue/eslint-config-prettier**：^10.2.0
- **@vue/eslint-config-typescript**：^14.5.0
- **@vue/test-utils**：^2.4.6
- **@vue/tsconfig**：^0.7.0
- **eslint**：^9.21.0
- **eslint-plugin-playwright**：^2.2.0
- **eslint-plugin-vue**：~10.0.0
- **jiti**：^2.4.2
- **jsdom**：^26.0.0
- **npm-run-all2**：^7.0.2
- **prettier**：3.5.3
- **typescript**：~5.8.0
- **vite**：^6.2.1
- **vite-plugin-vue-devtools**：^7.7.2
- **vitest**：^3.0.8
- **vue-tsc**：^2.2.8

---

## 📄 指令介紹

### 開發

```bash
pnpm run dev
```

### 打包

```bash
pnpm run build
```

### 預覽

```bash
pnpm run preview
```

### 單元測試

```bash
pnpm run test:unit
```

### 端對端測試

```bash
pnpm run test:e2e
```

### 語法檢查與自動修復

```bash
pnpm run lint
```

### 程式碼格式化

```bash
pnpm run format
```

---

## 🧩 目錄結構

```
/src
├── /components         # Vue 組件
├── /router             # Vue Router 設定
├── /store              # Pinia 狀態管理
├── /views              # 頁面視圖
└── /assets             # 靜態資源
```

---

## 🔥 E2E 測試

本專案使用 **Playwright** 進行 E2E 測試，相關設定位於 `playwright.config.ts`。

---

## 📑 ESLint & Prettier

- ESLint 與 Prettier 配置於 `.eslintrc.cjs` 及 `.prettierrc` 中，保持程式碼風格一致。

---

## 📝 版本說明

- 專案版本：0.0.0

---

## 📘 Git Commit 格式規範

### 📝 格式範例

```
<type>(<scope>): <subject>
```

### 🎯 常見的 type

- `feat`：新增功能
- `fix`：修復 bug
- `docs`：修改文件
- `style`：格式化代碼（不影響功能）
- `refactor`：重構代碼
- `test`：新增或修改測試
- `chore`：更新建置工具、CI/CD 等雜項
- `perf`：性能優化

### 🔥 subject 規範

- 使用祈使句，例如：add login page、fix API bug
- 盡量簡短，避免超過 50 字
- 如果有特定範疇（scope），可以加上，例如：feat(auth): add login page

### 📄 Commit 範例

```
feat(router): add dynamic route
fix(auth): fix token refresh bug
docs(readme): update installation guide
```
