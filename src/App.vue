<template>
  <div id="app">
    <TimeTracker />
  </div>
</template>

<script>
import TimeTracker from "@/components/TimeTracker.vue";

export default {
  name: "App",
  components: {
    TimeTracker,
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
 // background-color: #6699cc;
}
</style>
