<script lang="ts">
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar />
  <body class="container text-center">
    <RouterView />
  </body>
</template>

<style scoped></style>
