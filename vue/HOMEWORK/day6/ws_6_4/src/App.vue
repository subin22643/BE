<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
    <div class="app">
        <h1 class="appName">Quiz 퀴즈</h1>
        <p class="text">여기는 퀴즈의 나라! 놀라운 퀴즈들이 기다리고 있어요. 지금 바로 도전해보세요!</p>
      <nav>
        <RouterLink :to="{ name: 'homeview' }">Home</RouterLink>
        <RouterLink :to="{ name: 'quickview' }">Quiz</RouterLink>
      </nav>
      <RouterView/>
    </div>
</template>

<style scoped>

div {
  align-items: center;
}
.app {
  text-align: center;
  align-items: center;
  background-color:rgb(231, 231, 240);
  width: 600px;
  height: 250px;
  margin: 0px auto;
  padding-top: 10px;

}


.appName {
  font-size: 30px;
  background-color: orange;
  color: white;
  width: 500px;
  height: 90px;
  margin: auto;
  border-radius: 10px 10px 0px 0px / 10px 10px 0px 0px;
  display: flex; 
  justify-content: center; 
  align-items: center;
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
  margin: 0px auto 70px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center; 
  border-left: 1px solid var(--color-border);
}

nav a {
  display: inline-block;
  padding: 0 2rem;
  color: white;
  border-left: 1px solid white;
}

nav a:first-of-type {
  border: 0;
}


/* nav > span {
  margin: 20px;
} */

</style>
