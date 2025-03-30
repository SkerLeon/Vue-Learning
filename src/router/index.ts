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
      component: () => import('../pages/FireBase.vue'),
    },
  ],
})

export default router
