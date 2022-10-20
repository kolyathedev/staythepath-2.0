<template lang="">
  <nav
    v-if="loggedIn"
    class="navbar navbar-expand-lg bg-light justify-content-end"
  >
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/login" @click="logoutChange"
          >Log In</RouterLink
        >
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/journal">Register</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
  <nav v-else class="navbar navbar-expand-lg bg-light justify-content-end">
    <div class="container">
      <a class="navbar-brand" href="#">Welcome {{ name }}</a>
      <ul class="nav">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Paths</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/journal">Journal</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/about">About</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="#!" @click="logoutChange"
            >Log Out</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
export default {
  data(): { loggedIn: Boolean; name?: string } {
    return {
      loggedIn: false,
      name: "Kolya",
    };
  },
  methods: {
    logoutChange(): void {
      this.loggedIn = !this.loggedIn;
      // need to add redirect after login to '/'
    },
  },
};
</script>
<style lang="scss" scoped></style>
