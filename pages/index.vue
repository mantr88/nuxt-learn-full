<script setup lang="ts">
import {useCounterStore} from "~/stores/myStore";

const counter = useCounter();

const store = useCounterStore();
console.log(store);
</script>

<template>
  <div class="flex gap-5 p-5">
    <div>
      Counter with VueUse composables: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
    <Counter />
    <div><CounterSecond /></div>
  </div>
</template>
