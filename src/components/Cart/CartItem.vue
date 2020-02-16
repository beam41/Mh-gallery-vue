<template>
  <div class="cart_item">
    <img :src="'http://localhost:3000/img/' + item.imgn" />
    <span>
      <h3>{{item.name}}</h3>
      <div>
        <select v-model="selecting">
          <option
            v-for="(price, index) in item.prices"
            :value="index"
            :key="item.imgn + index"
          >{{ price.type | capital }} – ${{ price.price }}+</option>
        </select>
        $
        <input type="text" v-model="price" :class="item.priceValid ? '': 'warn'" />
      </div>
      <div>
        Qty
        <input type="text" v-model="qty" />
      </div>
      <p>= ${{this.sumPrice}}</p>
      <svg
        v-on:click="delItem()"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Image } from '@/models/Image'
export default Vue.extend({
  name: 'CartItem',
  props: {
    item: Object,
    index: Number,
  },
  data: () => ({
    selecting: 0,
    minPrice: 0,
    qty: 1,
    price: 0,
  }),
  created() {
    this.$store.dispatch('editPriceValid', { index: this.index, valid: true })
    this.minPrice = this.item.prices[0].price
  },
  filters: {
    capital: function(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
  computed: {
    sumPrice(): number {
      const price = this.qty * this.price
      this.$store.dispatch('editWillBuy', { index: this.index, price })
      return price
    },
  },
  methods: {
    delItem() {
      this.$store.dispatch('delItem', this.index)
    },
  },
  watch: {
    minPrice(val) {
      if (+this.price < +val) this.price = +val
    },
    price(val) {
      this.$store.dispatch('editPriceValid', { index: this.index, valid: !(+val < +this.minPrice) })
    },
    selecting(val) {
      this.minPrice = this.item.prices[val].price
    },
  },
})
</script>

<style lang="scss" scoped>
.cart_item {
  display: flex;
  background: rgb(241, 241, 241);
  width: 100%;
}

img {
  height: 200px;
}

.warn {
  background: red;
}
</style>
