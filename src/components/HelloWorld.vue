<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h1>Hello Vue3 + Vitejs</h1>
  <router-view></router-view>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
