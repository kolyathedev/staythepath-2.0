<script lang="ts">
import NavBar from "./components/NavBar.vue";
import Experience from "./components/Experience.vue";
export default {
  components: {
    NavBar,
    Experience,
  },
};
</script>

<template>
  <NavBar />
  <Experience />
  <body class="container text-center">
    <RouterView />
  </body>
</template>

<style scoped>
.container {
  z-index: 1;
  position: relative;
  top: 0px;
}
</style>
