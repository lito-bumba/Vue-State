<script setup lang="ts">

import HomeView from "@/views/HomeView.vue";
import HistoryView from "@/views/HistoryView.vue";
</script>

<template>
  <div class="container-app">
    <HomeView style="flex: 1"/>
    <HistoryView style="flex: 1"/>
  </div>
</template>

<style scoped>
.container-app {
  display: flex;
}
</style>
