// 套件方法
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'

// components
import App from '../src/App.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      component: { template: '<div>Home</div>' },
    },
  ],
})

describe('1+1測試', () => {
  it('1+1=2', () => {
    expect(1 + 1).toBe(3)
  })
})

describe('app.vue測試', () => {
  it('app.vue測試', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router], // 將模擬的 router 注入
      },
    })

    // 等待路由初始化完成
    await router.isReady()

    expect(wrapper.text()).toContain('我是APP')
  })
  it('偵測html標籤', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router], // 將模擬的 router 注入
      },
    })

    // 等待路由初始化完成
    await router.isReady()

    expect(wrapper.find('h1').exists()).toBe(true)
  })
})
