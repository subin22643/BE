<template>
    <div>
        <h1>가수 이름</h1>
        <img :src="Image" alt="이미지" style="width:200px">
        <p>가수 소개글</p>
    </div>
</template>

<script setup>
import Image from '@/assets/singer.jpg'
</script>

<style scoped>
div {
    border: 1px solid #000;
    text-align: center;
}
</style>