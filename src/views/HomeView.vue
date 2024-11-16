<script setup lang="ts">
import {store} from "@/store/store";
</script>

<template>
  <main>
    <h1>{{ store.counter }}</h1>
    <button @click="store.addHistory">Click</button>
    <RouterLink to="/history">
      <button>Ver Historico</button>
    </RouterLink>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

h1 {
  font-size: 16rem;
  text-align: center;
  font-weight: bold;
}

button {
  border: none;
  background: white;
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bolder;
}
</style>