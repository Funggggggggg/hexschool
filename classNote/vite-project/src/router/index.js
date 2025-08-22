import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      // 元件的寫法有兩種
      // 1. 直接匯入
      // 2. 使用動態匯入
    },
    {
      // 練習開一頁
      path: '/review',
      component: () => import('../views/ReviewView.vue'),
    },
  ],
})

export default router
