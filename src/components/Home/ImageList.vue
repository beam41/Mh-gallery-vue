<template>
  <div :v-if="images" class="container">
    <div v-for="image in images" :key="image.imgn" class="box">
      <div v-on:click="imgClick(image.imgn)">
        <img :src="'http://localhost:3000/img/' + image.imgn" :alt="image.imgn" />
        <h2>{{ image.name }}</h2>
        <p class="light">{{ image.price | priceTxt }}</p>
        <button class="btn">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getList } from '@/services/ImageService'
import { Img } from '../../models/Img'

export default Vue.extend({
  name: 'ImageList',
  data: () => ({
    images: null as Img[] | null,
  }),
  methods: {
    imgClick(imgn: string) {
      this.$router.push('image/' + imgn)
    },
  },
  created() {
    getList().then(val => {
      this.images = val
    })
  },
  filters: {
    priceTxt(price: number) {
      if (price === 0) return 'Name Your Own Price'
      else return '$' + price + '+'
    },
  },
})
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 5em 1em;
  justify-content: center;
}

.box {
  width: 100%;

  box-sizing: border-box;

  margin: 0;
  padding: 1.5em;

  & img {
    width: 100%;
  }

  &:after {
    display: table;
    clear: both;
    content: '';
  }

  & > div {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition-duration: 250ms;
  }

  & > div:hover {
    box-shadow: 0 0 4px 0 black;
    cursor: pointer;
  }

  & h2 {
    font-size: 1.75em;
  }

  & p,
  & h2 {
    margin: 0.5em 0;
  }
}

@media (min-width: 800px) {
  .box {
    width: 50%;
  }
}

@media (min-width: 1250px) {
  .box {
    width: 33.33333%;
  }
}
</style>
