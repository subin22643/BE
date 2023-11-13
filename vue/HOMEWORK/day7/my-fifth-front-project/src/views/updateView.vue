<script setup>
import  { useRoute } from "vue-router"
import { useBalanceStore } from '@/stores/balance'
const route = useRoute()

const store = useBalanceStore()

const info = store.search(route.params.name)

const moreMoney = () => {
    info.balance += 1000
}

</script>

<template>
    <div>
        <h2>데이터 수정 페이지</h2>
        <p>이름: {{ info.name }}</p>
        <p>잔고: {{ info.balance }}</p>
        <button @click="moreMoney">+</button>
    </div>
</template>

<style scoped>

</style>
