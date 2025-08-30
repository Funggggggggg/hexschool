<template>
  <div>
    <h1>會員功能</h1>
    <h3>註冊</h3>
    <input type="text" placeholder="email" v-model="signupField.email" />
    <input type="text" placeholder="password" v-model="signupField.password" />
    <input type="text" placeholder="nickname" v-model="signupField.nickname" />
    <button @click="signup">註冊</button> userId: {{ userId }}
    <br />
    {{ signupField }}
    <h3>登入</h3>
    <input type="text" placeholder="email" v-model="signinField.email" />
    <input type="text" placeholder="password" v-model="signinField.password" />
    <button @click="signin">登入</button> userToken: {{ userToken }}
    {{ signinField }}
    <h3>驗證</h3>
    <input type="text" placeholder="email" />
    <input type="text" placeholder="password" />
    <button>驗證</button>
  </div>
</template>
<script setup>
// 小步測試 隨時 console.log 檢查有沒有傳對
// try catch => 幫你抓錯，不至於讓整個網站掛掉
// 註冊的小錯誤：
//    1. Password 長度不足（至少 6 碼）+ email 格式錯誤
//    2. catch 的 (error) 沒寫
//    3. userId 的寫法不熟

import { ref, onMounted } from 'vue'
import axios from 'axios' // 記得安裝
const api = 'https://todolist-api.hexschool.io/'
const signupField = ref({
  // Field 欄位名稱
  email: '',
  password: '',
  nickname: '',
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

const signinField = ref({
  // Field 欄位名稱
  email: '',
  password: '',
})
const userToken = ref('')
const signin = async () => {
  try {
    const res = await axios.post(`${api}users/sign_in`, signinField.value)
    console.log(res)
    userToken.value = res.data.token
    document.cookie = `customtodotoken=${res.data.token};path=/`
    // cookie 標準格式：
    // name=value; path=/; expires=日期; secure; SameSite=Lax
    //      name=value：cookie 的名稱和值
    //      path=/：指定 cookie 哪個路徑下才會被送出去，/ 代表整個網站徑都能用這個 cookie
    //      expires=... 或 max-age=...：有效期限 (不寫就是「session cookie」，關掉瀏覽器就會消失)
    //      secure：只允許 HTTPS 傳送
    //      HttpOnly：只能伺服器設定，JS 不能存取
    //      SameSite：防止跨站攻擊 (CSRF)
  } catch (error) {
    console.log('錯誤!')
    console.log(error)
  }
}

const user = ref({
  uid: '',
  nickname: '',
})
// .replace(..., "$1")
// replace 會把整個 document.cookie 的字串拿來套正則。
// $1 代表第一個捕捉群組（也就是 ([^;]*) 裡抓到的值）。
// 這樣就能直接把 token 的值 抽出來。

onMounted(async () => {
  const token = document.cookie.replace(/(?:^|.*;\s*)customtodotoken\s*=\s*([^;]*).*$/i, '$1')
  // console.log(token) => 小步測試
  const res = await axios.get(`${api}users/checkout`, {})
  // 「把 cookie 裡的 token 讀出來，放到 Authorization header，呼叫 API /users/checkout 驗證登入，並把伺服器回傳的使用者資料存到 user 裡」
  // 把 token 放在 Authorization header，是 HTTP 標準設計的身份驗證欄位，安全性比放在 URL 或 Cookie 更高，也方便後端 middleware 統一驗證。這是前後端分離架構的主流做法。
  // 「放在 Authorization header」就是一個 業界慣例 + 安全考量 + 後端容易驗證 的做法。
})
</script>

<style scoped>
h1,
h3,
p {
  margin: 10px 0;
}
input {
  margin-right: 5px;
}
</style>
