<script lang="ts">
import { useAuthStore } from "../stores/auth";
import Path from "../components/Path.vue";
// Options using Setup()
export default {
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
  computed: {
    increment() {
      return this.authStore.increment;
    },
  },

  data() {
    return {
      TESTProps: "very nice ts",
    };
  },
  components: {
    Path,
  },
  methods: {
    nameSearch(event: { target: { value: string } }) {
      this.TESTProps = event.target.value;
      console.log(this.TESTProps);
    },
  },
};
</script>

<template>
  <div
    v-for="path in authStore.data"
    :key="path._id"
    class="row justify-content-center mt-5"
  >
    <div class="col-8 align-self-center">
      <Path :name="path.pathName" :pathData="path" />
    </div>
  </div>
  <!-- <button @click="authStore.getYuData(TESTProps)">Click for yugi data</button>
  <input @input="nameSearch" type="text" /> -->
</template>
