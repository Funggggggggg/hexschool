<template>
  <div class="todoList_list">
    <ul class="todoList_tab">
      <li>
        <a @click="filterStatus = 'all'" :class="{ active: filterStatus === 'all' }"
          >全部
          <!--  href="#"  -->
        </a>
      </li>
      <li>
        <a @click="filterStatus = 'incomplete'" :class="{ active: filterStatus === 'incomplete' }"
          >待完成</a
        >
        <!-- href="#" -->
      </li>
      <li>
        <a @click="filterStatus = 'completed'" :class="{ active: filterStatus === 'completed' }"
          >已完成</a
        >
        <!-- href="#" -->
      </li>
      <!-- {{filterStatus}} 測試 -->
    </ul>
    <div class="todoList_items">
      <ul class="todoList_item">
        <TodoItem
          v-for="todo in filterTodos"
          :key="todo.id"
          :todo="todo"
          @remove-todo="emit('remove-todo', $event)"
        ></TodoItem>
        <!-- $event 代表的是「事件物件」或是子元件傳出的資料 -->
      </ul>
      <div class="todoList_statistics">
        <p>{{ incompleteTodos.length }}個未完成項目</p>
      </div>
    </div>
  </div>
  <!-- {{ todos }} 測試-->
</template>
<script setup>
import TodoItem from './TodoItem.vue'
import { ref, computed } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
})

// 接收
const emit = defineEmits(['remove-todo']) //陣列

const filterStatus = ref('all')
const filterTodos = computed(() => {
  switch (filterStatus.value) {
    case 'incomplete':
      return props.todos.filter((t) => !t.status)
    case 'completed':
      return props.todos.filter((t) => t.status)
    default:
      return props.todos
  }
})

const incompleteTodos = computed(() => props.todos.filter((t) => !t.status))
</script>
