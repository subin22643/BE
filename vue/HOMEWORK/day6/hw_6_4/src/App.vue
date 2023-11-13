<template>
    <div>
        <MainPage/>
        <RouterLink :to="{ name: 'some'}">Some</RouterLink>
        <span> | </span>
        <RouterLink :to="{ name: 'other'}">Other</RouterLink>
        <span> | </span>
        <RouterLink :to="{ name: 'students'}">Students</RouterLink>
        <RouterView/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';
import MainPage from '@/components/MainPage.vue'


// const userName = ref('김하나')

</script>

<style scoped>

</style>