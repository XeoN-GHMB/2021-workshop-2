import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Umfrage from '../views/Umfrage.vue'
import Blitz from '../views/Blitz.vue'
import Impressum from '../views/Impressum.vue'
import Liste from '../views/Liste.vue'
import Merch from '../views/Merch.vue'
import Tschau from '../views/Tschau.vue'
import Zahl from '../views/Zahl.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/umfrage',
    name: 'Umfrage',
    component: Umfrage
  },
  {
    path: '/blitz',
    name: 'Blitz',
    component: Blitz
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/liste',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/merch',
    name: 'Merch',
    component: Merch
  },
  {
    path: '/tschau',
    name: 'Tschau',
    component: Tschau
  },
  {
    path: '/zahl',
    name: 'Zahl',
    component: Zahl
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
