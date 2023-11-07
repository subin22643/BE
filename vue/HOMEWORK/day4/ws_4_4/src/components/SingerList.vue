<template>
    <div>
        <h1>가수 목록</h1>
        <SingerDetail/>
        <SingerDetail/>
    </div>
</template>

<script setup>
import SingerDetail from './singers/SingerDetail.vue';
</script>

<style scoped>
div {
    text-align: center;
}
.card {
    display: inline-block;
    width: 40%;
    margin: 20px
}
h1 {
    color: orangered
}
</style>