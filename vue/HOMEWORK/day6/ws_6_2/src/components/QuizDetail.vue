<script setup>
import { ref } from 'vue'

const inputText = ref('')

defineProps({
    q: Array,
})



</script>

<template>
    <div class="card">
        <span>{{ q.pk }}번 문제. {{ q.question }}</span>
        <p>정답 입력</p>
        <input type="text" v-model="inputText">
    </div>
</template>

<style scoped>



.card {
    background-color: gainsboro;
    border: 1px solid black;
    margin-top: 20px;
    border-radius: 10px;
    
}


</style>
