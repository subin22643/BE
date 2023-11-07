<template>
    <div>
        <h1>가수 목록</h1>
        <SingerDetail v-for="singer in singers"/>
    </div>
</template>

<script setup>
import SingerDetail from './singers/SingerDetail.vue';
import { ref } from 'vue'

const singers = ref([
    { name: 'adele'},
    { name: 'maroon5'},
    { name: 'Dua Lipa'},
])

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