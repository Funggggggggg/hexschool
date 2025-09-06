<template>
  <li>
    <label class="todoList_label">
      <input class="todoList_input" type="checkbox" value="true" />
      <span>{{ todo.content }}</span>
    </label>
    <a href="#">
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
</script>
