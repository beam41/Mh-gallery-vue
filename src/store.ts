import Vue from 'vue'
import Vuex from 'vuex'
import { ImageCart } from './models/ImageCart'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    carts: [] as ImageCart[],
  },
  mutations: {
    ADD_TO_CART(state, item: ImageCart) {
      state.carts.push(item)
    },
    DEL_FROM_CART(state, index: number) {
      state.carts.splice(index, 1)
    },
  },
  actions: {
    addItem({ commit }, item: ImageCart) {
      commit('ADD_TO_CART', item)
    },
    delItem({ commit }, index: number) {
      commit('DEL_FROM_CART', index)
    },
  },
  getters: {},
})
