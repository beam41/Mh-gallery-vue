<template>
  <div :v-if="images" class="container">
    <div v-for="image in images" :key="image.imgn" class="box">
      <img :src="'http://localhost:3000/img/' + image.imgn" :alt="image.imgn" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { getList } from '@/services/ImageService'

export default Vue.extend({
  name: 'ImageList',
  data: () => ({
    images: null,
  }),
  created() {
    getList().then(val => {
      this.images = val
    })
  },
})
</script>

<style lang="scss" scoped>
.container {
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 1em;
  justify-content: center;
}

.box {
  width: 100%;

  box-sizing: border-box;
  margin: 0;
  padding: 0.5em;

  & img {
    width: 100%;
  }

  &:after {
    display: table;
    clear: both;
    content: '';
  }
}

@media (min-width: 750px) {
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
