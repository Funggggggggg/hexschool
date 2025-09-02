<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <!-- <RouterLink to="/">註冊</RouterLink> |  -->
    <!-- <RouterLink to="/login_page">登入</RouterLink> | -->
    <RouterLink to="/todo_list">代辦清單</RouterLink>
  </nav>
  <RouterView />
</template>
