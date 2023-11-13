<script setup>
import MainView from '@/views/MainView.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <RouterLink :to="{name: 'main'}">main</RouterLink>
    <div>
      <h1>pinia + router 연습하기</h1>
      <RouterView />
    </div>
</template>

<style scoped>

</style>
