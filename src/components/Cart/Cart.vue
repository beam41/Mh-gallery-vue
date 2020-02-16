<template>
  <div class="cart">
    <div class="container">
      <h2>Cart</h2>
      <CartList />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CartList from './CartList.vue'
export default Vue.extend({
  name: 'cart',
  components: {
    CartList,
  },
  created() {
    window.scrollTo(0, 0)
  },
})
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 90px 40px 40px 40px;
  height: 100vh;
}
h2 {
  font-size: 3rem;
  margin: 0 0 20px 0;
}
</style>
