<script setup lang="ts">
import jsonServer from '@/api/jsonServer'

const props = defineProps<{
  title: string
  apiPath: string
  fields: string[]
}>()
const items = ref<Record<string, any>[]>([])
const form = reactive<Record<string, string>>(Object.fromEntries(props.fields.map((f) => [f, ''])))

onMounted(fetchData)

async function fetchData() {
  items.value = await jsonServer.getJsonServerData<Record<string, any>[]>(props.apiPath)
}

async function handleAdd() {
  await jsonServer.postJsonServerData(props.apiPath, form)
  await fetchData()
  Object.keys(form).forEach((k) => (form[k] = ''))
}

async function handleDelete(id: number) {
  await jsonServer.deleteJsonServerData(`${props.apiPath}/${id}`)
  await fetchData()
}

async function handleEdit(id: number) {
  await jsonServer.putJsonServerData(`${props.apiPath}/${id}`, form)
  await fetchData()
  Object.keys(form).forEach((k) => (form[k] = ''))
}
</script>

<template>
  <div class="crud">
    <h2>{{ title }}清單</h2>

    <form
      @submit.prevent="handleAdd"
      class="form"
    >
      <input
        v-for="field in fields"
        :key="field"
        v-model="form[field]"
        :placeholder="field"
        required
      />
      <button type="submit">新增</button>
    </form>

    <table class="data-table">
      <thead>
        <tr>
          <th
            v-for="field in fields"
            :key="field"
          >
            {{ field }}
          </th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
        >
          <td
            v-for="field in fields"
            :key="field"
          >
            {{ item[field] }}
          </td>
          <td>
            <button @click="handleDelete(item.id)">刪除</button>
            <button @click="handleEdit(item.id)">修改</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.crud {
  margin-bottom: 2rem;
}
.form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
}
.data-table th,
.data-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
button {
  cursor: pointer;
}
</style>
