<script setup lang="ts">
const counter = useCounter();
</script>

<template>
  <div class="flex gap-5 p-5">
    Counter with VueUse composables: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
