<template>
    <div class="card">
        <h4>이름: {{ cardDetail.name }}</h4>
        <p>직함: {{ cardDetail.title }}</p>
        <button @click="deleteCardFunc">명함 삭제</button>
    </div>
</template>

<script setup>

const props = defineProps({
    cardDetail: Object,
})

const emit = defineEmits(['deleteCardEvent'])

const deleteCardFunc = function() {
    emit('deleteCardEvent', props.cardDetail)
}

</script>

<style scoped>
.card {
    border: 1px solid black;
    width: 300px;
    height: 150px;
    margin: 20px;
    text-align: center;
    /* text-wrap: nowrap; */
    display: inline-block;
    background-color:whitesmoke;
    border-radius: 10px;
}
</style>