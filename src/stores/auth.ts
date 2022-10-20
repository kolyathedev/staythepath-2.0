import { defineStore } from "pinia";
import axios from "axios";

// Options API
export const useAuthStore = defineStore("auth", {
  state: () => ({
    count: 0,
    name: "Kolya",
    data: [
      {
        pathName: "M3",
        totalHours: 1,
        totalMins: 119,
        _id: Math.random() * 300,
      },
      {
        pathName: "Reading",
        totalHours: 34,
        totalMins: 230,
        _id: Math.random() * 300,
      },
      {
        pathName: "Writing",
        totalHours: 2,
        totalMins: 230,
        _id: Math.random() * 300,
      },
    ],
  }),
  getters: {
    getName: (state): String => state.name,
  },
  actions: {
    increment() {
      this.count++;
    },
    async getYuData(cardName: string) {
      try {
        const res = await axios.get(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
        );
        console.log(res);
      } catch (error) {
        throw new Error("shit aint working");
      }
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
