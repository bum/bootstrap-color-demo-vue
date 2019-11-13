import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'home',
    label: 'Home',
    component: Home,
  },
  {
    path: '/card',
    name: 'card',
    label: 'Card',
    component: () => import('@/views/Card'),
  },
  {
    path: '/progress',
    name: 'progress',
    label: 'Progress',
    component: () => import('@/views/Progress'),
  },
  {
    path: '/form',
    name: 'form',
    label: 'Form',
    component: () => import('@/views/Form'),
  },
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
})

export default router
