<script setup>
import Image1 from '@/assets/quizList.png'
import Image2 from '@/assets/quizCreate.png'
import Image3 from '@/assets/quizAnswer.png'

</script>

<template>
    <div>
        <h2>퀴즈 앱 사용 방법</h2>
        <h1>1. 퀴즈 목록 확인하기</h1>
        <P>퀴즈 목록 페이지에서 다양한 퀴즈를 확인하세요.</P>
        <img src="@/assets/quizList.png" alt="목록">
        <h1>2. 퀴즈 생성하기</h1>
        <P>퀴즈는 직접 생성 할 수도 있어요.</P>
        <img src="@/assets/quizCreate.png" alt="생성">
        <h1>3. 정답 페이지</h1>
        <P>작성한 답안이 정답인지 확인하세요.</P>
        <img src="@/assets/quizAnswer.png" alt="정답">
    </div>
</template>

<style scoped>
img {
    width:800px;
}

div {
    display: flex;
    flex-direction: column;
}
</style>
