<script setup lang="ts">
import {useCounterStore} from "~/stores/myStore";

const store = useCounterStore();
</script>

<template>
  <div class="flex gap-5 p-5">
    Counter Second with Pinia: {{ store.count }}
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
  </div>
</template>
