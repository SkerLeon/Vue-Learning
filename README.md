## 🧩 目錄結構

```
/src
├── /api                # API 相關請求封裝
├── /assets             # 靜態資源 (圖片、CSS、SVG 等)
├── /components         # Vue 通用組件
├── /pages              # 頁面視圖 (Vue 頁面)
├── /router             # Vue Router 設定與路由
├── /stores             # Pinia 狀態管理
├── /type               # TypeScript 型別定義
├── App.vue             # 主應用組件
├── auto-imports.d.ts   # 自動導入的類型聲明
├── firebase.ts         # Firebase 配置檔案
└── main.ts             # Vue 入口主程式
```

---

### 📂 專案根目錄

```
├── .vscode                # VSCode 設定檔
├── e2e                    # Playwright 端對端 (E2E) 測試
├── node_modules           # 依賴模組
├── public                 # 靜態 HTML 模板與資源
├── .gitignore             # Git 忽略規則
├── index.html             # 主 HTML 入口文件
├── package.json           # 專案依賴和腳本
├── tsconfig.json          # TypeScript 全域配置
├── vite.config.ts         # Vite 配置
├── playwright.config.ts   # Playwright 測試配置
└── vitest.config.ts       # Vitest 測試配置
```

---

### 📂 其他重要文件說明

- **.eslintrc-auto-import.json**：自動導入相關的 ESLint 配置。
- **eslint.config.ts**：ESLint 設定文件。
- **.prettierrc.json**：Prettier 格式化規則配置。
- **pnpm-lock.yaml**：pnpm 依賴鎖定文件。
- **README.md**：專案說明文件。
- **tsconfig.app.json**：TypeScript 應用配置。
- **tsconfig.node.json**：TypeScript Node.js 配置。
- **tsconfig.vitest.json**：TypeScript 測試配置。

---

## 🌳 Git Flow 和 Git Commit 命名規則

### Git 分支

- **GitLab 分支**：

  - `main`：系統部署版本。
  - `dev`：測試分支。

- **本地分支**：
  - 各開發者建立自己的分支，完成後合併至 `dev`。

### 流程規範

1. 每個開發人員建立屬於自己的分支，在階段性開發完成後合併至 `dev`。
2. 系統版本更新從 `dev` 整合至 `main`，使用版本更新日期作為 commit。

### Git Commit 命名規範

| 類型     | 說明                                                                          |
| -------- | ----------------------------------------------------------------------------- |
| Feat     | 新功能。                                                                      |
| Modify   | 既有功能需求調整的修改。                                                      |
| Fix      | 錯誤修正。                                                                    |
| Docs     | 更新文件，如 README.md。                                                      |
| Style    | 程式碼格式調整（formatting）、缺少分號（missing semi colons）等。             |
| Refactor | 重構，不改變既有邏輯的程式碼調整與優化。                                      |
| Test     | 測試相關變動。                                                                |
| Chore    | 更新專案建置設定、更新版本號等雜務。                                          |
| Revert   | 撤銷之前的 commit。格式為：`revert: type(scope): subject`（回覆版本：xxxx）。 |
| Perf     | 改善效能的程式碼變動。                                                        |

---

## 📦 專案使用的套件與插件

### 🔗 依賴套件（Dependencies）

- firebase：^11.5.0
- pinia：^3.0.1
- vue：^3.5.13
- vue-router：^4.5.0

### 🛠️ 開發依賴（DevDependencies）

- @playwright/test：^1.51.0
- @tsconfig/node22：^22.0.1
- @types/jsdom：^21.1.7
- @types/node：^22.13.9
- @vitejs/plugin-vue：^5.2.1
- @vitejs/plugin-vue-jsx：^4.1.1
- @vitest/eslint-plugin：^1.1.36
- @vue/eslint-config-prettier：^10.2.0
- @vue/eslint-config-typescript：^14.5.0
- @vue/test-utils：^2.4.6
- @vue/tsconfig：^0.7.0
- eslint：^9.21.0
- eslint-plugin-playwright：^2.2.0
- eslint-plugin-vue：~10.0.0
- jiti：^2.4.2
- jsdom：^26.0.0
- npm-run-all2：^7.0.2
- prettier：3.5.3
- typescript：~5.8.0
- unplugin-auto-import：^19.1.2
- vite：^6.2.1
- vite-plugin-vue-devtools：^7.7.2
- vitest：^3.0.8
- vue-tsc：^2.2.8

---

## 🚀 專案運行與部署方式

### 🔧 專案本地運行指令

- 啟動開發模式：

```bash
pnpm dev
```

- 編譯並打包專案：

```bash
pnpm build
```

- 預覽打包後的專案：

```bash
pnpm preview
```

### 📌 專案部署流程（Docker）

#### 1. 本地打包（前端專案與 Docker 映像）

```bash
pnpm run build
docker build -t remote-monitoring-frontend .
```

#### 2. 登入並推送 DockerHub

> 💡 docker 帳號密碼位置：`\\192.168.88.31\共同\暫存區\育欣\帳號密碼`

```bash
docker login 192.168.88.192:5000
docker tag remote-monitoring-frontend 192.168.88.192:5000/remote-monitoring-frontend
docker push 192.168.88.192:5000/remote-monitoring-frontend
```

#### 3. 部署到伺服器主機

> 💡 目前部署位置：`192.168.88.120`（博成哥桌下電腦），可遠端連線部署。

```bash
docker stop remote-monitoring-frontend && docker rm remote-monitoring-frontend
docker pull 192.168.88.192:5000/remote-monitoring-frontend
docker run -d --restart unless-stopped -p 8080:80 --name remote-monitoring-frontend 192.168.88.192:5000/remote-monitoring-frontend
```
