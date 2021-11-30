<template>
  <div class="time-tracker">
    <Loader v-if="loading" />
    <Button pause class="time-tracker__item" />
    <Button signed class="time-tracker__item" />
    <Button class="time-tracker__item" />
    <div class="time-tracker__separator"></div>
    <Avatar class="time-tracker__item" />
    <User class="time-tracker__item" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";
import Avatar from "@/components/Avatar.vue";
import User from "@/components/User.vue";
import * as service from "@/service/actions.js";

export default {
  name: "TimeTracker",
  components: { Button, Loader, Avatar, User },
  data() {
    return {
      loading: false, // cambiar a true
    };
  },
  created() {
    /*  return new Promise((resolve) => {
      service.getStatus().finally(() => {
        setTimeout(() => this.loading = false, 500);
        resolve();
      });
    });*/
    /*    <div class="time-tracker__user" @mouseenter="toogleMenu" @mouseleave="toogleMenu">
      <div>dvnidnv</div>
      <div class="time-tracker__user__menu" :class="{'time-tracker__user__menu--shown': showMenu, 'time-tracker__user__menu--hided': !showMenu}"></div>
    </div>*/
  },
};
</script>

<style lang="scss" scoped>
.time-tracker {
  background-color: #e1dbda;
  height: 50px;
  width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  border-radius: 60px;
  padding: 20px;

  &__separator {
    border-left: 1px solid grey;
    height: 40px;
    margin-right: 20px;
  }

  &__item {
    margin-right: 20px;
  }
}
</style>