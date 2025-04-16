import fs from 'fs'

// 檢查是否存在 db.json，有的話先刪除再建立空檔案
const dbPath = './db.json'
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath)
  console.log('🗑️ 已刪除舊的 db.json')
}
fs.writeFileSync(dbPath, '{}', 'utf-8')
console.log('📄 已建立新的空白 db.json')

const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))

const db = { users, products }

fs.writeFileSync('./db.json', JSON.stringify(db, null, 2))

console.log('✅ 假資料 db.json 已清空並更新完畢！')
