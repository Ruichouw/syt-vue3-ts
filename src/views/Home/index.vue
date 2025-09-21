<template>
  <div class="home">
    <Carousel></Carousel>
    <Search></Search>
    <Hospital></Hospital>
  </div>
</template>

<script setup lang="ts">
import Carousel from "./components/Carousel.vue";
import Search from "./components/Search.vue";
import Hospital from "./components/Hospital.vue";
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  min-height: 700px;
  margin-top: 70px;
  img {
    width: 100%;
    height: 400px;
  }
}
</style>
