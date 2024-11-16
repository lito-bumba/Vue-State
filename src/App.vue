<script setup lang="ts">

import HomeView from "@/views/HomeView.vue";
import HistoryView from "@/views/HistoryView.vue";
import {store} from "@/store/store";
</script>

<template>
  <div class="container-app">
    <HomeView style="flex: 1"/>
    <HistoryView
        v-if="store.isHistoryVisible"
        style="flex: 1"/>
  </div>
</template>

<style scoped>
.container-app {
  display: flex;
}
</style>
