import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import QuickView from '@/views/QuickView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'homeview',
    component: HomeView,
  },
  {
    path: '/quiz',
    name: 'quickview',
    component: QuickView,
  },
  ]
})

export default router
