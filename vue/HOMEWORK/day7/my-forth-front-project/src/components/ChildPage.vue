<script setup>
defineProps({
    'childData': Object
})
</script>

<template>
    <div>
        <h1>자식 페이지</h1>
        <p>{{ childData.name }}</p>
    </div>
</template>

<style scoped>

</style>
