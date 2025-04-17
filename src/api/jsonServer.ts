import request from './axios'

const jsonServer = {
  async getJsonServerData<T>(url: string): Promise<T> {
    return request<T>({ url, method: 'GET' })
  },
  async postJsonServerData<T>(url: string, data: T): Promise<void> {
    return request<void>({ url, method: 'POST', data })
  },
  async putJsonServerData<T>(url: string, data: T): Promise<void> {
    return request<void>({ url, method: 'PUT', data })
  },
  async deleteJsonServerData(url: string): Promise<void> {
    return request<void>({ url, method: 'DELETE' })
  },
}

export default jsonServer
