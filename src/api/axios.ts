import axios from 'axios'
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 從環境變數讀取 API 基礎 URL
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 根據環境變數設定
  timeout: 5000, // 請求超時時間
})

// 請求攔截器
instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 在這裡可以添加通用的 headers 或 token
    // config.headers['Authorization'] = `Bearer ${yourToken}`;
    return config
  },
  (error) => {
    // 處理請求錯誤
    return Promise.reject(error)
  },
)

// 回應攔截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 統一處理成功回應
    return response.data
  },
  (error) => {
    // 統一處理錯誤
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error.response?.data || error.message)
  },
)

// 通用請求函式
const request = <T = any>(config: InternalAxiosRequestConfig): Promise<T> => {
  return instance(config)
}

export default request
