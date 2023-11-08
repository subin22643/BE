<template>
  <div>
    <header class="card">
      명함 관리 페이지
    </header>

    <main>
      <p>명함을 관리하는 페이지입니다. 여기에 명함 목록이 표시됩니다.</p>
      <article></article>
    </main>

    <footer>
      <p>ⓒ 2023 My Business Cards</p>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>
.card {
  width: 500px;
  height: 150px;
  text-align: center;
  padding: 75px 0px 0px 0px;
  font-size: 50px;
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
  position: absolute;
}
</style>