<script setup lang="ts">
// useLazyFetch is a Nuxt 3 composable that allows you to fetch data lazily, meaning the data is fetched only when it's needed, rather than immediately when the component is created.
// This is particularly useful for improving performance and reducing unnecessary network requests, especially in scenarios where the
const {
  data: products,
  status,
  error,
} = await useLazyFetch("/api/products", {
  transform: (_products) => _products,
});

// useAsyncData is another Nuxt 3 composable that simplifies the process of fetching data asynchronously and managing its state within a component. It automatically handles loading, error, and data states, making it easier to work with asynchronous data in your Vue components.
const {
  data: productCount,
  status: productCountStatus,
  error: productCountError,
  refresh: productCountRefresh,
} = await useAsyncData("products-count", () => $fetch("/api/products-count"));

const refresh = () => {
  productCountRefresh();
};

console.log(productCount.value);
</script>

<template>
  <div class="grid gap-7 grid-cols-2">
    <div>
      <h2>Using useLazyFetch</h2>
      <div v-if="status === 'pending'">Loading ...</div>
      <div v-else-if="error">Error loading products: {{ error.message }}</div>
      <div v-else>
        {{ products[0] }}
      </div>
    </div>
    <div>
      <h2>Using useAsyncData</h2>
      <div v-if="productCountStatus === 'pending'">Loading ...</div>
      <div v-else-if="productCountError">
        Error loading products count: {{ productCountError.message }}
      </div>
      <div v-else>Product count: {{ productCount }}</div>
      <div>
        <button
          class="p-5 border border-amber-600 mt-4 rounded-3xl hover:bg-amber-600 hover:text-white"
          @click="refresh"
        >
          Refresh Count
        </button>
      </div>
    </div>
  </div>
</template>
