import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/nav',
    name: 'Nav',
    component: () => import('@/components/Nav')
  },
  {
    path: '/navlink',
    name: 'Navlink',
    component: () => import('@/components/Nav/NavLink.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/views/Article')
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('@/views/Article/Docs.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
