<script setup lang="ts">
import {store} from "@/store/store";

defineProps(
    {
      history: {
        type: Object,
        required: true
      }
    }
)

const deleteItem = (id: number) => {
  store.deleteHistory(id)
}
</script>

<template>
  <div class="history-item">
    <p>Clicou para {{ history.number }}</p>
    <p>{{ history.dateTime }}</p>
    <button @click="deleteItem(history.id)">
      <img
          src="@/assets/icons/delete.svg"
          alt="Delete Icon"
      />
    </button>
  </div>
</template>

<style scoped>
.history-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  padding: 8px;
  border-radius: 16px;
  border: 2px solid #2c3e50;
}

button {
  border: none;
  background: transparent;
  cursor: pointer;
}
</style>