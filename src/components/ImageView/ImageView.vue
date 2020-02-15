<template>
  <div class="imgpage">
    <div class="im">
      <img :src="'http://localhost:3000/img/' + imgName" :alt="imgName" />
    </div>
    <div v-if="imgInfo">
      <h2>{{ imgInfo.name }}</h2>
      <div class="container">
        <div class="info">
          <h3>Info</h3>
          <p>
            <strong>Camera Maker:</strong>
            {{ imgInfo.make }}
          </p>
          <p>
            <strong>Camera Model:</strong>
            {{ imgInfo.model }}
          </p>
          <p>
            <strong>Lens:</strong>
            {{ imgInfo.lens }}
          </p>
          <p>
            <strong>Focal length:</strong>
            {{ imgInfo.focal }} mm
          </p>
          <p>
            <strong>Exposure:</strong>
            {{ imgInfo.exposure }} sec
          </p>
          <p>
            <strong>F-stop:</strong>
            ƒ/{{ imgInfo.fstop }}
          </p>
          <p>
            <strong>ISO:</strong>
            {{ imgInfo.iso }}
          </p>
        </div>
        <div class="price">
          <h3>Price</h3>
          <p v-for="price in imgInfo.prices" :key="price.type">
            <strong>{{ price.type | capital }}</strong>
            – ${{ price.price }}+
          </p>
          <p><i>Free Shipping</i></p>
          <button class="btn">Add To cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Image } from '../../models/Image'
import { getImageInfo } from '@/services/ImageService'

export default Vue.extend({
  name: 'ImageView',
  computed: {
    imgName() {
      return this.$route.params.name as string
    },
  },
  data: () => ({
    imgInfo: null as Image | null,
  }),
  created() {
    document.title = 'Meehoi Gallery — ' + this.imgName
    getImageInfo(this.imgName).then(val => {
      this.imgInfo = val
      document.title = 'Meehoi Gallery — ' + val.name
    })
  },
  filters: {
    capital: function(value: string) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
  },
})
</script>

<style lang="scss" scoped>
p,
h2,
h3 {
  margin: 0.5em 0;
}

h2 {
  font-size: 3rem;
  text-align: center;
}

h3 {
  font-size: 1.75rem;
}

.im {
  display: flex;
  justify-content: center;
}

img {
  width: 1000px;
  max-height: 100vh;
  object-fit: cover;
}

.container {
  margin: auto;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  & > div {
    padding: 0 10px;
  }
}

.price {
  text-align: right;
}

@media (max-width: 1000px) {
  img,
  .container {
    width: 100vw;
  }
}

@media (max-width: 750px) {
  .container {
    flex-direction: column;
    justify-content: center;
  }
}
</style>
