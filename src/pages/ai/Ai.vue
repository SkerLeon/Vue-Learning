<script setup lang="ts">
const content = ref('')
const reqest = ref('')
const postData = async () => {
  const result = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'llama3.1',
      prompt: reqest.value,
      stream: false,
    }),
  })
  const data = await result.json()
  content.value = data.response
}
</script>

<template>
  <h2>ai 測試頁面</h2>
  <input
    v-model="reqest"
    type="textarea"
  />
  <button @click="postData">點我送出</button>
  <div style="color: white">{{ content }}</div>
</template>

<style scoped lang="scss"></style>
