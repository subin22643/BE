<template>
    <div class="card">
        <p>이름: {{ cardDetail.name }}</p>
        <p>직함: {{ cardDetail.title }}</p>
    </div>
</template>

<script setup>

defineProps({
    cardDetail: Array,
})

</script>

<style scoped>
.card {
    border: 1px solid black;
    width: 300px;
    height: 150px;
    margin: 20px;
    text-align: center;
    text-wrap: nowrap;
    display: inline-block;
}
</style>