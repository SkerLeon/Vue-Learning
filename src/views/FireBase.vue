<script setup lang="ts">
import { db } from '@/firebase'
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from 'firebase/firestore'

// 定義 Todo 的型別
type Todo = {
  id: string // 文件的唯一 ID
  text: string // 待辦事項的文字內容
  completed: boolean // 是否完成
}

// 使用型別應用到 ref
const todos = ref<Todo[]>([]) // 待辦事項列表
const newTodo = ref<string>('') // 新的待辦事項文字
let lastVisible: any = null // 用於分頁查詢的最後一個文件

// ✅ 取得所有資料
const fetchTodos = async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'))
  todos.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[] // 明確指定返回值型別
}

// ✅ 查詢已完成的待辦事項
const fetchCompletedTodos = async () => {
  const q = query(collection(db, 'todos'), where('completed', '==', true))
  const querySnapshot = await getDocs(q)
  todos.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[]
}

// ✅ 按文字排序的待辦事項
const fetchSortedTodos = async () => {
  const q = query(collection(db, 'todos'), orderBy('text'))
  const querySnapshot = await getDocs(q)
  todos.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[]
}

// ✅ 分頁查詢
const fetchPaginatedTodos = async () => {
  const q = query(
    collection(db, 'todos'),
    orderBy('text'),
    startAfter(lastVisible || 0), // 如果沒有上一頁，從頭開始
    limit(5),
  )
  const querySnapshot = await getDocs(q)
  todos.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Todo[]
  lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1] // 更新最後一個文件
}

// ✅ 新增資料
const addTodo = async () => {
  if (newTodo.value) {
    await addDoc(collection(db, 'todos'), {
      text: newTodo.value,
      completed: false,
    })
    newTodo.value = ''
    await fetchTodos() // 重新獲取資料
  }
}

// ✅ 更新資料
const toggleTodo = async (todo: Todo) => {
  const todoRef = doc(db, 'todos', todo.id)
  await updateDoc(todoRef, {
    completed: !todo.completed,
  })
  await fetchTodos()
}

// ✅ 刪除資料
const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, 'todos', id))
  await fetchTodos()
}

// 在組件掛載時獲取資料
onMounted(fetchTodos)
</script>

<template>
  <div>
    <h1>我是Firebase</h1>

    <!-- 新增待辦事項 -->
    <input
      v-model="newTodo"
      placeholder="輸入新的待辦事項"
    />
    <button @click="addTodo">➕ 新增</button>

    <!-- 查詢功能 -->
    <div>
      <button @click="fetchTodos">取得所有資料</button>
      <button @click="fetchCompletedTodos">查詢已完成</button>
      <button @click="fetchSortedTodos">按文字排序</button>
      <button @click="fetchPaginatedTodos">分頁查詢</button>
    </div>

    <!-- 顯示待辦事項 -->
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="toggleTodo(todo)"
        />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="deleteTodo(todo.id)">❌ 刪除</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
.completed {
  text-decoration: line-through;
  color: gray;
}
</style>
