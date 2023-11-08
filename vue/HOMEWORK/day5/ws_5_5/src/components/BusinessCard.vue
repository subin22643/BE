<template>
    <div>
        <h3>보유 명함 목록</h3>
        <p v-if="business.length === 0"> 명함이 없습니다. 새로운 명함을 추가해 주세요.</p>
        <p v-else>현재 보유중인 명함 수 : {{ business.length }}</p>
        <BusinessCardDetail @delete-card-event="deleteCard" v-for="card in business" :card-detail="card"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BusinessCardDetail from './BusinessCardDetail.vue'

const business = ref([
    {name: '일론 머스크', title: '테슬라 테크노킹'},
    {name: '래리 엘리슨', title: '오라클 창업주'},
    {name: '빌 게이츠', title: '마이크로소프트 공동창업주'},
    {name: '래리 페이지', title: '구글 공동창업주'},
    {name: '세르게이 브린', title: '구글 공동창업주'},
])

const deleteCard = function(cardDetail) {
    business.value.forEach((card) => {
        if (card.name === cardDetail.name) {
            return business.value.splice(business.value.indexOf(card), 1)
        }
    })
}


</script>

<style scoped>

</style>