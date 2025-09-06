<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#"><span>王小明的代辦</span></a>
        </li>
        <li><a href="#loginPage">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <TodoForm></TodoForm>
        <TodoList v-if="todos.length" :todos="todos"></TodoList>
        <!-- :todos="todos" 意思是「把父層的 todos 陣列，傳給子層的 props.todos」。 -->
        <p v-else>尚無待辦事項</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
import { ref } from 'vue'

const todos = ref([
  { id: 1, content: '把冰箱發霉的檸檬拿去丟', status: false },
  { id: 2, content: '打電話叫媽媽匯款給我', status: true },
])

const addTodo = (content) => {
  if (content.trim() !== '') {
    todos.value.push({
      id: Date.now(), // 用時間戳產生唯一 id =>時間戳 = 現在時間的毫秒數，
      // 用途 = 拿來當「臨時唯一 id」，確保每個代辦能被正確區分
      content, // 使用者輸入的代辦內容
      status: false,
    })
  }
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((t) => t.id !== id)
  // filter 會「過濾」陣列，把「符合條件」的元素留下來，組成一個新陣列。
  // 翻譯：
  // 這裡的 (t) 代表：當 filter 去迭代 todos.value 陣列的每一個元素時，會把當前這個元素放到變數 t 裡。
  // 條件 t.id !== id 的意思是
  // => 我要保留「 t.id 與傳入 id 不相同」的項目
  // => 當完全相同時，不符合過濾條件，會被排除。
}
</script>
