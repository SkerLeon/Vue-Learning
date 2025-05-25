import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomeView.vue'),
    },
    {
      path: '/firebase',
      name: 'fireBase',
      component: () => import('../pages/firebase/FireBase.vue'),
    },
    {
      path: '/jsonServer',
      name: 'jsonServer',
      component: () => import('../pages/jsonserver/JsonServer.vue'),
    },
    {
      path: '/aiTest',
      name: 'aiTest',
      component: () => import('../pages/ai/aiTest.vue'),
    },
  ],
})

export default router
