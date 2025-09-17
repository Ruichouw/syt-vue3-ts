<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <router-view></router-view>
    <HospitalBot></HospitalBot>
  </div>
</template>

<script setup lang="ts">
import HospitalTop from "./components/HospitalTop.vue";
import HospitalBot from "./components/HospitalBot.vue";
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  background-color: bisque;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
