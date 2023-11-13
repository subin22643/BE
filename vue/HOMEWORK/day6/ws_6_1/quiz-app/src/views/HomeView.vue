<script setup>
import { useRouter } from 'vue-router'
import Image1 from '@/assets/quizList.png'
import Image2 from '@/assets/quizCreate.png'
import Image3 from '@/assets/quizAnswer.png'

</script>

<template>
    <div>
        <h2>퀴즈 앱 사용 방법</h2>
        <img :src="Image1" alt="이미지1">
        <img :src="Image2" alt="이미지2">
        <img :src="Image3" alt="이미지3">
    </div>
</template>

<style scoped>
img {
    width:800px;
}
div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>
