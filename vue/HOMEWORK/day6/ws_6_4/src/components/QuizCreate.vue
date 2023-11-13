<script setup>
import { ref } from 'vue'

const inputQ = ref('')
const inputA = ref('')

const emit = defineEmits(['createQuiz'])

const createQuiz = function(que, ans) {
    emit('createQuiz', que, ans)
    inputQ.value = ''
    inputA.value = ''
}

</script>

<template>
    <div>
        <form @submit.prevent="createQuiz(inputQ, inputA)">
            <h3>퀴즈 생성</h3>
            <p>문제</p>
            <textarea name="" id="question" cols="30" rows="10" v-model="inputQ"></textarea>
            <p>답안</p>
            <input type="text" v-model="inputA">
            <button type="submit">퀴즈 생성</button>
        </form>
    </div>
</template>

<style scoped>

</style>
