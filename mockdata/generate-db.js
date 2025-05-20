// json server套件 模組化安裝說明
// 1. 安裝json server
// 2. 複製mockdata資料夾到專案跟目錄
// 3. 設定package.json的scripts，"json-server:start": "cd ./mockdata && node generate-db.js && json-server --watch ./db.json && cd ../"
// 4. 在.gitignore中加入db.json，避免db.json被上傳到git

// 注意事項
// 1. 要依照模組化的資料夾結構調整generate-db.js抓的路徑

import fs from 'fs'
import path from 'path'

// 檢查是否存在 db.json，有的話先刪除再建立空檔案
const dbPath = './db.json'
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath)
  console.log('🗑️ 已刪除舊的 db.json')
}
fs.writeFileSync(dbPath, '{}', 'utf-8')
console.log('📄 已建立新的空白 db.json')

// 自動抓取 ./ 路徑下的所有 JSON 檔案（排除 db.json）
const files = fs.readdirSync('./').filter((file) => {
  return file.endsWith('.json') && file !== 'db.json'
})

// 讀取mockdata資料夾的所有json並彙整到db物件上
const db = {}
files.forEach((file) => {
  const key = path.basename(file, '.json') // 使用檔名作為 key
  db[key] = JSON.parse(fs.readFileSync(`./${file}`, 'utf-8'))
})

// 將 db 物件寫入 db.json
fs.writeFileSync('./db.json', JSON.stringify(db, null, 2))
console.log('✅ 假資料 db.json 已清空並更新完畢！')
