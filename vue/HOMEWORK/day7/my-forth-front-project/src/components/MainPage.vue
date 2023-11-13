<script setup>
import ParentPage from './ParentPage.vue';
import { useFamilyStore } from '../stores/family';

const store = useFamilyStore()

</script>

<template>
    <div>
        <h1>pinia 연습하기</h1>
        <ParentPage v-for="family in store.familyInfo" :key="family.id" :family-data="family"/>
    </div>
</template>

<style scoped>

</style>
