<template>
  <div>
    <header class="card">
      명함 관리 페이지
    </header>

    <main>
      <p>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</p>
      <article>
        <CreateCardForm @create-card-event="updateCard"/>
        <BusinessCard :new-card="newCard"/>
      </article>
    </main>

    <footer>
      <p>ⓒ 2023 My Business Cards</p>
    </footer>
  </div>
</template>

<script setup>
import BusinessCard from './components/BusinessCard.vue';
import CreateCardForm from '@/components/CreateCardForm.vue'
import { ref } from 'vue'

const newCard = ref({
  name: '',
  title: ''
})

const updateCard = function(info) {
  newCard.value.name = info.name
  newCard.value.title = info.title
  }

</script>

<style scoped>
.card {
  width: 400px;
  height: 100px;
  text-align: center;
  padding: px 0px 0px 0px;
  font-size: 40px;
  font-weight: bolder;
  color: white;
  background-color: cornflowerblue;
  margin: auto;
}

main {
  text-align: center;
  margin: 50px;
}

footer {
  background-color: lightgray;
  text-align: center;
  width: 100%;
  height: 5%;
  bottom: 0px;
  position: fixed;
}
</style>