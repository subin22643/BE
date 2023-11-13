<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goView = (name) => {
    router.push({ name: 'update', params: { name: name}})
}

defineProps({
    'balanceData' : Object
})

</script>

<template>
    <div>
        <p>{{ balanceData.name }}</p>
        <p>{{ balanceData.balance }}</p>
        <button @click.prevent="goView(balanceData.name)">updateBalance</button>
        <hr>
    </div>
</template>

<style scoped>

</style>
