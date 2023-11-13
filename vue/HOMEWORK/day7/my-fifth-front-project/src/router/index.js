import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import updateView from '@/views/updateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/update/:name',
      name: 'update',
      component: updateView,
    },
  ]
})

export default router
