<template>
  <!-- <h1>登入</h1> -->
  <!-- <h1>註冊</h1> -->
  <div id="loginPage" class="bg-yellow">
    <div class="conatiner loginPage vhContainer">
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
          <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
          <label class="formControls_label" for="email">Email</label>
          <input
            class="formControls_input"
            type="text"
            id="email"
            name="email"
            placeholder="請輸入 email"
            required
          />
          <span>此欄位不可留空</span>
          <label class="formControls_label" for="pwd">密碼</label>
          <input
            class="formControls_input"
            type="password"
            name="pwd"
            id="pwd"
            placeholder="請輸入密碼"
            required
          />
          <input
            class="formControls_btnSubmit"
            type="button"
            onclick="javascript:location.href='#todoListPage'"
            value="登入"
            @click="signin"
          />
          <a class="formControls_btnLink" href="#/">註冊帳號</a>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios' // 記得安裝
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
</script>
