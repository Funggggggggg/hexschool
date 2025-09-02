import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '註冊',
      component: SignUpView,
    },
    {
      path: '/login_page',
      name: '登入',
      component: () => import('../views/LogInView.vue'),
    },
    {
      path: '/todo_list',
      name: '代辦清單',
      component: () => import('../views/TodolistView.vue'),
    },
  ],
})

export default router
