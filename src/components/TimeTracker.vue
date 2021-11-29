<template>
  <div class="time-tracker">
    <Button pause />
    <Button signed />
    <Button />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "TimeTracker",
  components: { Button },
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