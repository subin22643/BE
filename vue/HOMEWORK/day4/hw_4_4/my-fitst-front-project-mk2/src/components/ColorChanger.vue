<template>
    <div>
        <input type="text" v-model="colorClass">
        <p :class="colorClass">입력창에 올바른 색상 명을 입력하면 글자색이 바껴요.</p>
    </div>
</template>

<script setup>

import { ref } from 'vue'
const colorClass = ref('')

</script>

<style scoped>
.red {
    color: red;
}
.tomato {
    color: tomato;
}
.blue {
    color: blue;
}
.coral {
    color: coral;
}
.powderblue {
    color: powderblue;
}
.lightgray {
    color: #ccc;
}
.green {
    color: green;
}
.greenyellow {
    color: greenyellow;
}
</style>