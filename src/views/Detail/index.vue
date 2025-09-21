<template>
  <div class="detail">{{ id }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);
console.log(id);
</script>

<style scoped>
.detail {
  width: 100%;
  min-height: 700px;
  margin-top: 75px;
}
</style>
