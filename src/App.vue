<template>
  <div id="app">
    <Navbar />
    <router-view />
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
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 1.1em;
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

  &:focus {
    outline: none;
  }
}

.light {
  font-weight: 300;
}

.f-nav {
  margin-top: 50px;
}
</style>
