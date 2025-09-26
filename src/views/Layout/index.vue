<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <div class="content">
      <router-view></router-view>
    </div>
    <HospitalBot></HospitalBot>
  </div>
</template>

<script setup lang="ts">
import HospitalTop from "./components/HospitalTop.vue";
import HospitalBot from "./components/HospitalBot.vue";
</script>

<style scoped lang="scss">

.container {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 1200px;
    // background-color: aqua;
  }
}
</style>
