<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
.btn {
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
  font-size: 1.25em;
  padding: 0.1em 0.5em;

  &:hover {
    cursor: pointer;
  }
}

.light {
  font-weight: 300;
}
</style>
