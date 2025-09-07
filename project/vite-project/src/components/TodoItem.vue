<template>
  <li>
    <label class="todoList_label">
      <input class="todoList_input" type="checkbox" value="true" />
      <span>{{ todo.content }}</span>
    </label>
    <a @click="handleRemoveTodo(todo.id)" href="#">
      <i class="fa fa-times"></i>
    </a>
  </li>
</template>
<script setup>
const props = defineProps({
  todo: {
    type: Object, // 單一
    required: true,
  },
})

const emit = defineEmits(['remove-todo'])
const handleRemoveTodo = (id) => {
  emit('remove-todo', id)
  // 宣告函式 handleRemoteTodo，會接收一個參數 id。
  // 當這個函式被呼叫時，它會執行 emit('remove-todo', id)：
  // 意思就是 觸發子元件(TodoList.vue)的 remote-todo 事件，並且把這個 id 一起丟回給父元件。
}
</script>
