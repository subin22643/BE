<template>
    <div>
        <h1>학생 상세 정보 목록 입니다.</h1>
        <p v-for="student in studentsInfo">{{ student.name }} 학생 정보 보기</p>
        <RouterLink v-for="student in studentsInfo" :to="{ name: 'studentDetail', params: { name: student.name }}">{{ student.name }} 학생 정보 보기 <p></p> </RouterLink>
        <RouterView/>
    </div>
</template>

<script setup>

const studentsInfo = [
    { name: '김하나'},
    { name: '김두리'},
    { name: '김서이'},
]

import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router';



</script>

<style scoped>

</style>