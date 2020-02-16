import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home/Home.vue'
import ImageView from '../components/ImageView/ImageView.vue'
import Cart from '../components/Cart/Cart.vue'

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
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
