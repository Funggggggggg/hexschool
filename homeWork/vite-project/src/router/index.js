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
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/firstHomework',
      name: 'firstHomework',
      component: () => import('../views/FirstHomeworkView.vue'),
    },
    {
      path: '/secondHomework',
      name: 'secondHomework',
      component: () => import('../views/SecondHomeworkView.vue'),
    },
    {
      path: '/thirdHomework',
      name: 'thirdHomework',
      component: () => import('../views/ThirdHomeworkView.vue'),
    },
    {
      psth: '/advanced',
      name: 'advanced',
      component: () => import('../views/AdvancedView.vue'),
    },
  ],
})

export default router
