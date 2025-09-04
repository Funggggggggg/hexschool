<template>
  <div class="todoList_list">
    <ul class="todoList_tab">
      <li><a href="#" class="active">全部</a></li>
      <li><a href="#">待完成</a></li>
      <li><a href="#">已完成</a></li>
    </ul>
    <div class="todoList_items">
      <ul class="todoList_item">
        <TodoItem></TodoItem>
      </ul>
      <div class="todoList_statistics">
        <p>5 個已完成項目</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import TodoItem from './TodoItem.vue'
</script>
