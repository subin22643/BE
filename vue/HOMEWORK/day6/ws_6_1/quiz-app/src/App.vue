<script setup>
import HomeView from './views/HomeView.vue';
</script>

<template>
    <div class="card">
      <span class="app">
        <h1 class="appName">Quiz 퀴즈</h1>
        <p class="text">여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</p>
      </span>
      <nav>
        Home 
        <span> | </span>
      </nav>
    </div>
    <HomeView/>
</template>

<style scoped>

div {
  align-items: center;
}
.card {
  text-align: center;
  align-items: center;
  background-color:rgb(231, 231, 240);
  width: 550px;
  margin: auto;
  height: 250px
}


.appName {
  font-size: 30px;
  background-color: orange;
  color: white;
  width: 500px;
  height: 90px;
  margin: auto;
  border-radius: 10px 10px 0px 0px / 10px 10px 0px 0px;
  display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

.text {
  background-color: white;
  width: 460px;
  height: 100px;
  margin: auto;
  border-radius: 0px 0px 10px 10px / 0px 0px 10px 10px;
  display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  padding: 0px 20px;
}

nav {
  background-color: rgb(68, 68, 68);
  color: white;
  width: 500px;
  height: 30px;
  margin: auto;
  margin-top: 20px;
  display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
}

nav > span {
  margin: 20px;
}

</style>
