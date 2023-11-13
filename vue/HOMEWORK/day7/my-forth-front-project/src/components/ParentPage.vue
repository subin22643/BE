<script setup>
import ChildPage from './ChildPage.vue';

defineProps({
    'familyData': Object,
})

</script>

<template>
    <div>
        <h1>부모 컴포넌트</h1>
        <p>{{ familyData.father }}</p>
        <p>{{ familyData.mother }}</p>
        <ChildPage v-for="child in familyData.children" :key="child.id" :child-data="child"/>
    </div>
</template>

<style scoped>

</style>

