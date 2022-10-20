import { ref, computed } from "vue";
import { defineStore } from "pinia";

// Options API
export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Kolya" }),
  getters: {
    getName: (state): String => state.name,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

// Composition API
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
