<template>
  <div id="app">
    <Navbar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from './components/Navbar/Navbar.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Alegreya+Sans+SC:700|Alegreya+Sans:300,300i,400,700&display=swap');
@import url('~normalize.css');

body {
  overflow-x: hidden;
  overflow-y: scroll;
}

h1,
h2,
h3,
h4,
h5,
h6,
.btn,
a {
  font-family: 'Alegreya Sans SC', sans-serif;
  font-weight: bold;
}

p {
  font: 1.1em 'Alegreya Sans', sans-serif;
}

.btn {
  background: none;
  border: 2px solid black;
  outline: 3px solid white;
  font-size: 1.25em;
  padding: 0.1em 0.5em;
  transition-duration: 250ms;

  &:hover {
    cursor: pointer;
    background: black;
    color: white;
    border: 2px solid white;
    outline: 3px solid black;
  }
}

.light {
  font-weight: 300;
}

.f-nav {
  margin-top: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 125ms;
  transition-property: opacity;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
