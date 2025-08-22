<script setup>
  import { ref } from 'vue'

  const inputValue = ref(3)
  function showValue() {
    alert(`你輸入的是：${inputValue.value}`)
    // 取函式內的值需要加 .value 才能取到 ref 的值
  }
</script>
<template>
  <input v-bind:value="inputValue" type="text"  />
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
  <p>{{ inputValue }}</p>
    <button v-on:click="showValue" >
      <!-- v-on: => 事件監聽，後面接要監聽的事件，通常為 綁定的方法 或 JavaScript 表達式。 -->
      顯示輸入值
    </button>
    <p >目前輸入：{{ inputValue }}</p>
</template>



<style>
body {
  font-family: sans-serif;
}
</style>
