<script setup lang="ts">
import EntityCrud from './EntityCrud.vue'
const activeTab = ref('users')
</script>

<template>
  <div class="container">
    <h1>🧪 JSON Server 測試頁面</h1>

    <div class="tabs">
      <button
        :class="{ active: activeTab === 'users' }"
        @click="activeTab = 'users'"
      >
        👤 使用者資料
      </button>
      <button
        :class="{ active: activeTab === 'products' }"
        @click="activeTab = 'products'"
      >
        📦 商品資料
      </button>
    </div>

    <div v-if="activeTab === 'users'">
      <EntityCrud
        title="使用者"
        api-path="users"
        :fields="['name', 'email']"
      />
    </div>
    <div v-else>
      <EntityCrud
        title="商品"
        api-path="products"
        :fields="['name', 'price']"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
}
.tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.tabs button {
  padding: 0.5rem 1rem;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  border-radius: 4px;
}
.tabs button.active {
  background: #007bff;
  color: white;
}
</style>
