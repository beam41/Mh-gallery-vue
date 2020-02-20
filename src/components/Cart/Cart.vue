<template>
  <div class="cart">
    <div class="container">
      <h2>Cart</h2>
      <CartList />
      <div class="total">
        <p>Total: ${{sumTotal}}</p>
        <span>
          <button class="btn">Check Out</button>
        </span>
      </div>
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
  computed: {
    sumTotal() {
      return this.$store.getters.sumTotal
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 90px 40px 40px 40px;
  height: 100vh;
  max-width: 700px;
  margin: 0 auto;
}
h2 {
  font-size: 3rem;
  margin: 0 0 20px 0;
}

.total {
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: flex-end;
  & > * {
    margin: 0;
  }

  & p {
    font-size: 2em;
  }
}
</style>
