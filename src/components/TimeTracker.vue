<template>
  <div class="time-tracker">
    <Loader v-if="loading" />
    <Button pause />
    <Button signed />
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";
import * as service from "@/service/actions.js";

export default {
  name: "TimeTracker",
  components: { Button, Loader },
  data() {
    return {
      loading: true,
    };
  },
  created() {
    return new Promise((resolve) => {
      service.getStatus().finally(() => {
        setTimeout(() => this.loading = false, 500);
        resolve();
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.time-tracker {
  background-color: #e1dbda;
  height: 100px;
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  border-radius: 60px;
}
</style>