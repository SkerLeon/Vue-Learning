import request from './axios'
import type { AxiosRequestHeaders } from 'axios'

const jsonServer = {
  async getJsonServerData<T>(url: string): Promise<T> {
    return request<T>({ url, method: 'GET', headers: {} as AxiosRequestHeaders })
  },
  async postJsonServerData<T>(url: string, data: T): Promise<void> {
    return request<void>({ url, method: 'POST', data, headers: {} as AxiosRequestHeaders })
  },
  async putJsonServerData<T>(url: string, data: T): Promise<void> {
    return request<void>({ url, method: 'PUT', data, headers: {} as AxiosRequestHeaders })
  },
  async deleteJsonServerData(url: string): Promise<void> {
    return request<void>({ url, method: 'DELETE', headers: {} as AxiosRequestHeaders })
  },
}

export default jsonServer
