<template>
    <div>
        <form @submit.prevent="createCardFunc">
            <label for="name">이름</label>
            <input type="text" v-model="inputName" id="name">
            <label for="title">직함</label>
            <input type="text" v-model="inputTitle" id="title">
            <button class="button" type="submit">명함 추가</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inputName = ref("")
const inputTitle = ref("")

const emit = defineEmits(['createCardEvent'])

const createCardFunc = function() {
    const cardInfo = {
        name: inputName.value,
        title: inputTitle.value,
    }
    emit('createCardEvent', cardInfo)
    inputName.value = ""
    inputTitle.value = ""
}

</script>

<style scoped>
label {
    padding: 0px 10px;
}

.button {
    margin-left: 15px;
}
</style>
