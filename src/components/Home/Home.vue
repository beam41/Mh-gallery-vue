<template>
  <div class="jumbotron">
    <h1>Meehoi Gallery</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
    url('../../assets/images/DSC06153.jpg') no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;

  & h1 {
    font-size: 5rem;
    color: white;
  }
}
</style>
