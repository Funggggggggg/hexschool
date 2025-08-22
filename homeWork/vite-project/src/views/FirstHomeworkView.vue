<template>
  <div>
    <h1>第一周作業</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th scope="col">品項</th>
        <th scope="col">描述</th>
        <th scope="col">價格</th>
        <th scope="col">庫存</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="drink of drinkList" :key="drink.id">
        <!--  key 不是綁 drinkList，而是 drinkList 裡面的 drink 的 id -->
        <td>{{ drink.items }}</td>
        <td>{{ drink.discription }}</td>
        <td>
          <button @click="drink.price > 0 ? drink.price-- : drink.price = 0">-</button>
          {{ drink.price }}
          <button @click="drink.price++">+</button></td>
        <td>
          <button @click="drink.stock > 0 ? drink.stock-- : drink.stock = 0">-</button>
          {{ drink.stock }}
          <button @click="drink.stock++">+</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { ref } from 'vue'

const drinkList = ref([{
  id:1,
  items: '珍珠奶茶',
  discription: '香濃奶茶搭配QQ珍珠',
  price:50,
  stock:20
}, {
  id:2,
  items: '冬瓜檸檬',
  discription: '清新冬瓜配上新鮮檸檬',
  price:45,
  stock:18
  }, {
  id:3,
  items:'翡翠檸檬',
  discription:'綠茶與檸檬的完美結合',
  price:55,
  stock:34
  }, {
  id:4,
  items: '四季春茶',
  discription: '香醇四季春茶，回甘無比',
  price:45,
  stock:10
  }, {
  id:5,
  items: '阿薩姆奶茶',
  discription: '阿薩姆紅茶搭配香醇鮮奶',
  price:50,
  stock:25
  }, {
  id:6,
  items: '檸檬冰茶',
  discription: '檸檬與冰茶的清新組合',
  price:45 ,
  stock:20
  }, {
  id:7,
  items: '芒果綠茶',
  discription: '芒果與綠茶的獨特風味',
  price:55 ,
  stock:18
  }, {
  id:8,
  items: '抹茶拿鐵',
  discription: '抹茶與鮮奶的絕配',
  price:60 ,
  stock:20
}
])
</script>

<style scoped>
  table,td{
    border: 1px solid rgb(255, 255, 255);
    text-align: center;
  }
  td {
    padding: 3px;
  }
</style>
