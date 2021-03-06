import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Traffic from '../views/Traffic.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/traffic',
    name: 'Traffic',
    component: Traffic
  },
  {
    path: '/about/:id*',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
