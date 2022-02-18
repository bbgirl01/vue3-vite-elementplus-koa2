<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

defineProps({
  msg: String,
});

const count = ref(0);
const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>

<template>
  <h1>登录页</h1>
  <el-button @click="goHome">回首页</el-button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
