<script setup lang="ts">
const props = defineProps<{
  title: string
  apiPath: string
  fields: string[]
}>()
const items = ref<Record<string, any>[]>([])
const form = reactive<Record<string, string>>(Object.fromEntries(props.fields.map((f) => [f, ''])))

onMounted(fetchData)

async function fetchData() {
  const res = await fetch(`http://localhost:3000/${props.apiPath}`)
  items.value = await res.json()
}

async function handleAdd() {
  await fetch(`http://localhost:3000/${props.apiPath}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  await fetchData()
  Object.keys(form).forEach((k) => (form[k] = ''))
}

async function handleDelete(id: number) {
  await fetch(`http://localhost:3000/${props.apiPath}/${id}`, {
    method: 'DELETE',
  })
  await fetchData()
}

async function handleEdit(id: number) {
  await fetch(`http://localhost:3000/${props.apiPath}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
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
