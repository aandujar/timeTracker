<template>
  <div class="image">
    <div class="image__status"  :class="{
        'image__status--paused': pause,
        'image__status--signed': signed,
        'image__status--no-signed': !pause && !signed,
      }"></div>
    <img
      src="@/assets/avatar.jpg"
      alt="avatar"
      class="image__img"
    />
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    pause: { type: Boolean, required: false, default: false },
    signed: { type: Boolean, required: false, default: false },
  },
};
</script>

<style lang="scss" scoped>
.image {
  position: relative;

  &__img {
    height: 55px;
    width: 55px;
    border-radius: 50px;
    position: relative;
    z-index: 5;
  }

  &__name {
      font-size: 1.2em;
  }

  &__status {
    position: absolute;
    z-index: 10;
    margin-top: 20px;
    margin-left: 45px;
    border-radius: 25px;
    height: 18px;
    width: 18px;
    
    &--paused {
      background-color: #9e9e9e;
    }

    &--signed {
      background-color: #5ebea3;
    }

    &--no-signed {
      background-color: #ffab91;
    }
  }
}
</style>