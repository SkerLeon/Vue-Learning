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

const db = {}
files.forEach((file) => {
  const key = path.basename(file, '.json') // 使用檔名作為 key
  db[key] = JSON.parse(fs.readFileSync(`./${file}`, 'utf-8'))
})

fs.writeFileSync('./db.json', JSON.stringify(db, null, 2))

console.log('✅ 假資料 db.json 已清空並更新完畢！')
