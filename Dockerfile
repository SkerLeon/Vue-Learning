# 使用官方輕量版 Nginx 映像
FROM nginx:1.28.0-alpine

# 拷貝我們的 nginx 設定檔進去（蓋掉預設的 default.conf）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷貝前端打包好的 dist 檔案進去 nginx 的根目錄
COPY dist /usr/share/nginx/html

# 容器對外開放 80 port（內部用）
EXPOSE 80