<script setup lang="ts">

import HistoryItem from "@/components/HistoryItem.vue";
import {store} from "@/store/store";

</script>

<template>
  <div class="history-container">
    <h1 @click="this.$router.push({ name: 'home' }); ">Click History</h1>
    <div class="history-content">
      <HistoryItem
          v-for="history in store.histories"
          :history="history"
      />
    </div>
  </div>
</template>

<style scoped>
.history-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  height: 90vh;
}

h1 {
  font-size: 24pt;
  font-weight: bolder;
}

.history-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  padding-right: 24px;
}
</style>