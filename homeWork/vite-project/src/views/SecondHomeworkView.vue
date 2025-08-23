<template>
  <div>
    <h1>會員功能</h1>
    <h3>註冊</h3>
        <input type="text" placeholder="email" v-model="signupField.email">
        <input type="text" placeholder="password" v-model="signupField.password">
        <input type="text" placeholder="nickname" v-model="signupField.nickname">
        <button @click="signup">註冊</button> {{ userId }}
        <br>
        {{ signupField }}
    <!-- <h3>登入</h3>
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <button>登入</button>
    <h3>驗證</h3>
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <button>驗證</button> -->
  </div>
</template>
<script setup>
// 小步測試 隨時 console.log 檢查有沒有傳對
// try catch => 幫你抓錯，不至於讓整個網站掛掉
// 註冊的小錯誤：
//    1. Password 長度不足（至少 6 碼）+ email 格式錯誤
//    2. catch 的 (error) 沒寫
//    3. userId 的寫法不熟

import { ref } from 'vue';
import axios from 'axios'; // 記得安裝
const api = 'https://todolist-api.hexschool.io/';
const signupField = ref({ // Field 欄位名稱
    "email": '',
    "password": '',
    "nickname": ''
})
const userId = ref()
const signup = async ()=>{
  // console.log(`${api}users/sign_up`) => 小步測試
  try {
    const res = await axios.post(`${api}users/sign_up`, signupField.value);
    console.log(res);
    userId.value = res.data.uid
  } catch (error) {
    console.log('錯誤!')
    console.log(error.response?.data.message)
    // ?.「有的話再繼續，沒有的話就算了」中途哪一層不存在 → 回傳 undefined，避免程式當掉。
  }
}

</script>

<style scoped>
  h1,h3,p {
    margin: 10px 0;
  }
  input {
    margin-right:5px;
  }
</style>
