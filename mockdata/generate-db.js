// 這個js原理是直接使用node.js執行這個檔案，再把資料寫入db.json中，所以在新增新的假資料時，要在這邊引入並整合成db.json
import fs from 'fs'

// 清空 db.json
fs.writeFileSync('./db.json', '{}', 'utf-8')

const users = JSON.parse(fs.readFileSync('./users.json', 'utf-8'))
const products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))

const db = { users, products }

fs.writeFileSync('./db.json', JSON.stringify(db, null, 2))

console.log('✅ 假資料 db.json 已清空並更新完畢！')
