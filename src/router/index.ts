import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '@/views/BrowseView.vue'
import DetailProduct from '@/views/DetailProduct.vue'
import SignInView from '@/views/SignInView.vue'
import FinishView from '@/views/FinishView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/browse',
      name: 'browse',
      component: BrowseView
    },
    {
      path: '/login',
      name: 'login',
      component: SignInView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailProduct
    },
    {
      path: '/finish',
      name: 'finish',
      component: FinishView
    },
  ]
})

export default router
