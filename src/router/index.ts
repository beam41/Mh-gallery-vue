import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import ImageView from '../components/ImageView/ImageView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/image/:name',
    name: 'Image',
    component: ImageView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
