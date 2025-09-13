// Vue 2 Options API
// export const useCounterStore = defineStore("counterSecond", {
//   state: () => ({
//     count: 0,
//   }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//     decrement() {
//       this.count--;
//     },
//   },
// });

// Vue 3 Composition API
export const useCounterStore = defineStore("counterSecond", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {count, doubleCount, increment, decrement};
});
