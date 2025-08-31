<template>
  <!-- sign up -->
  <div id="signUpPage" class="bg-yellow">
    <div class="conatiner signUpPage vhContainer">
      <div class="side">
        <a href="#"
          ><img
            class="logoImg"
            src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/logo.png"
            alt=""
        /></a>
        <img
          class="d-m-n"
          src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/main/todolist/img.png"
          alt="workImg"
        />
      </div>
      <div>
        <form class="formControls" action="index.html">
          <h2 class="formControls_txt">註冊帳號</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
            v-model="signupField.email"
          />
          <label class="formControls_label" for="name">您的暱稱</label>
          <input
            class="formControls_input"
            type="text"
            name="name"
            id="name"
            placeholder="請輸入您的暱稱"
            v-model="signupField.nickname"
          />
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
            v-model="signupField.password"
          />
          <label class="formControls_label" for="pwd">再次輸入密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請再次輸入密碼"
            required
            v-model="signupField.password"
          />
          <input
            class="formControls_btnSubmit"
            type="button"
            onclick="javascript:location.href='#todoListPage'"
            value="註冊帳號"
            @click="signup"
          />
          <a class="formControls_btnLink" href="#loginPage">登入</a>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
// 小步測試 隨時 console.log 檢查有沒有傳對
// try catch => 幫你抓錯，不至於讓整個網站掛掉
// 註冊的小錯誤：
//    1. Password 長度不足（至少 6 碼）+ email 格式錯誤
//    2. catch 的 (error) 沒寫
//    3. userId 的寫法不熟

import { ref } from 'vue'
import axios from 'axios' // 記得安裝
const api = 'https://todolist-api.hexschool.io/'
const signupField = ref({
  // Field 欄位名稱
  email: '',
  nickname: '',
  password: '',
})
const userId = ref('')
const signup = async () => {
  // console.log(`${api}users/sign_up`) => 小步測試
  try {
    const res = await axios.post(`${api}users/sign_up`, signupField.value)
    console.log(res)
    userId.value = res.data.uid
  } catch (error) {
    console.log('錯誤!')
    console.log(error.response?.data.message)
  }
}
</script>
