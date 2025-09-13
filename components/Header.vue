<template>
  <div class="component-name">
    <ul class="flex space-x-4">
      <li>
        <NuxtLink
          to="/"
          class="hover:underline"
          >Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/events"
          class="hover:underline"
          >Events</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/custom"
          class="hover:underline"
          >Custom</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/fetching"
          class="hover:underline"
          >Fetching</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
