import Vue from 'vue'
import Vuex from 'vuex'
import { Image } from '@/models/Image'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    carts: [] as Image[],
  },
  mutations: {
    ADD_TO_CART(state, item: Image) {
      state.carts.push(item)
    },
    DEL_FROM_CART(state, index: number) {
      state.carts.splice(index, 1)
    },
    EDIT_VALID(state, { index, valid }) {
      state.carts[index].priceValid = valid
    },
    EDIT_WILLBUY(state, { index, price }) {
      state.carts[index].willBuy = price
    },
  },
  actions: {
    addItem({ commit }, item: Image) {
      commit('ADD_TO_CART', item)
    },
    delItem({ commit }, index: number) {
      commit('DEL_FROM_CART', index)
    },
    editPriceValid({ commit }, indexValid) {
      commit('EDIT_VALID', indexValid)
    },
    editWillBuy({ commit }, indexPrice) {
      commit('EDIT_WILLBUY', indexPrice)
    },
  },
  getters: {
    getItems: state => {
      return state.carts
    },
  },
})

export default store
