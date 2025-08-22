<!-- 在學習時須不斷釐清這段語法是誰的語法。(javascript、vite、vue) -->
<script setup>
  import { ref } from 'vue';
  const a = 2;
  const b = ref(5);
  // ref => Vue 專屬語法。用來創建一個響應式的變數，當變數改變時，Vue 會自動更新相關的 DOM。
</script>

<template>
  <div>
    <h1> {{ a }}</h1>
    <!-- {{ }} => Vue 專屬語法。自動渲染變數為文字顯示。 -->
    <input type="text" v-bind:value="a" />
    <!-- v-bind => Vue 專屬語法。將變數綁定到 HTML 元素的屬性上。 -->

    <!-- 變化題 -->
    <input type="text" v-bind:value="b" />
    <input type="text" v-model="b" />
    <!-- v-model => Vue 專屬語法。 雙向綁定即時更新，與 ref 配合使用。 -->
    <input type="text" v-bind:value="b" />

    <h1> {{ a }}</h1>
    <h1> {{ a }}</h1>
    <h1> {{ a }}</h1>
    <h1> {{ b }}</h1>
    <h1> {{ b }}</h1>
    <h1> {{ b }}</h1>
    <h1> {{ b }}</h1>
  </div>
</template>

 <style scoped >
header {
  line-height: 3;
}
</style>
