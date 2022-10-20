<script lang="ts">
import { useCounterStore } from "../stores/counter";
// Using Setup()
export default {
  setup() {
    const counterStore = useCounterStore();

    return { counterStore };
  },
  computed: {
    increment() {
      return this.counterStore.increment;
    },
  },
};
</script>

<template>
  <main>
    <div>
      {{ counterStore.count }}
    </div>
    <button @click="increment">click to add</button>
  </main>
</template>
