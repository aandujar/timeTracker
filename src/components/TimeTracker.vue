<template>
  <div class="time-tracker">
    <Loader v-if="loading" />
    <Button :isOnline="isOnline" class="time-tracker__item" />
    <div class="time-tracker__separator"></div>
    <Avatar class="time-tracker__item" />
    <User class="time-tracker__item" :user="getUserName" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Loader from "@/components/Loader.vue";
import Avatar from "@/components/Avatar.vue";
import User from "@/components/User.vue";
//import moment from "moment";
import * as service from "@/service/actions.js";

export default {
  name: "TimeTracker",
  components: { Button, Loader, Avatar, User },
  data() {
    return {
      loading: true,
      user: null,
    };
  },
  computed: {
    getUserName() {
      return this.user !== null
        ? `${this.user.employee.firstName} ${this.user.employee.lastName}`
        : "";
    },
    isOnline() {
      return this.user !== null && this.user.employee.workStatus === "online";
    },
  },
  created() {
    // format date method, to check with real data
    /*
    const date = moment("2021-04-12T15:19:51+02:00").format("x");
    const now = moment().format("x");
    const a = moment.duration(now - date, "milliseconds");
    let secs = a.asSeconds();
    let minutes = Math.floor(secs / 60);
    secs = Math.floor(secs % 60);
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (secs < 10) {
      secs = `0${secs}`;
    }
    console.log(`${hours}:${minutes}:${secs}`);*/

    return new Promise((resolve) => {
      service.getStatus().finally(() => {
        setTimeout(() => (this.loading = false), 500);
        resolve();
      });
    });
  },
  methods: {
    clockIn() {
      return new Promise((resolve) => {
        const data = {
          employeeId: this.user.employee.id,
          workEntryIn: {
            coordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        };
        service.clockIn(data).finally(() => {
          setTimeout(() => (this.loading = false), 500);
          resolve();
        });
      });
    },
    clockOut() {
      return new Promise((resolve) => {
        const data = {
          employeeId: this.user.employee.id,
          workEntryOut: {
            coordinates: {
              latitude: 0,
              longitude: 0,
            },
          },
        };
        service.clockOut(data).finally(() => {
          setTimeout(() => (this.loading = false), 500);
          resolve();
        });
      });
    },
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
  justify-content: flex-end;
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