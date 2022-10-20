<template lang="">
  <div class="card text-bg-dark text-center">
    <div class="card-header">{{ name }}</div>
    <div class="card-body">
      <h5 class="card-title">
        Hours: {{ computeHours(pathData.totalHours, pathData.totalMins) }} Mins:
        {{ pathData.totalMins % 60 }}
      </h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <a href="#" class="btn btn-outline-light">Update Record</a>
    </div>
    <div class="card-footer text-muted">Last updated:</div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    name: String,
    pathData: Object,
  },
  data() {
    return {
      hours: 0,
      mins: 0,
    };
  },
  methods: {
    computeHours(h: number, m: number): number {
      return h + Math.floor(m / 60);
    },
  },
};
</script>
<style lang="scss" scoped></style>
