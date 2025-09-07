<script setup lang="ts">
// Component logic
</script>

<template>
  <div class="h-screen text-white bg-blue-900">
    <NuxtLink to="/" class="hover:underline">← Home</NuxtLink>
    <p>Custom Layout</p>
    <slot />
  </div>
</template>
