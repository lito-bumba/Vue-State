<script setup lang="ts">
import {ref} from "vue";

let counter = ref(0)
</script>

<template>
  <main>
    <h1>{{ counter }}</h1>
    <button @click="counter++">Click</button>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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