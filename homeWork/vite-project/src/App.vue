<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink> | <RouterLink to="/about">About</RouterLink> |
  <RouterLink to="/firstHomework">FirstHomework</RouterLink> |
  <RouterLink to="/secondHomework">SecondHomework</RouterLink> |
  <RouterLink to="/thirdHomework">ThirdHomework</RouterLink>
  <RouterView />
</template>
