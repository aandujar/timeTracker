<template>
  <div class="button">
    <button
      class="button__item"
      :class="{
        'button__item--signed': isOnline,
        'button__item--no-signed': !isOnline,
      }"
      type="button"
      @click="clicked"
    >
      {{ getText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    isOnline: { type: Boolean, required: false, default: false }
  },
  computed: {
    getText() {
      return this.isOnline ? "Salir" : "Entrar";
    },
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  &__item {
    color: white;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    height: 40px;
    width: 100px;
    font-size: 1em;

    &:hover {
      box-shadow: 0px 0px 22px -5px black;
    }

    &--paused {
      background-color: #9e9e9e;
    }

    &--signed {
      background-color: #ffab91;
    }

    &--no-signed {
      background-color: #5ebea3;
    }
  }
}
</style>