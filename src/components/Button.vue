<template>
  <div class="button">
    <button
      class="button__item"
      :class="{
        'button__item--paused': pause,
        'button__item--signed': signed,
        'button__item--no-signed': !pause && !signed,
      }"
      type="button"
    >
      {{ getText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    pause: { type: Boolean, required: false, default: false },
    signed: { type: Boolean, required: false, default: false },
  },
  computed: {
    getText() {
      return this.pause ? "Pausar" : this.signed ? "Salir" : "Entrar";
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
      background-color: #5ebea3;
    }

    &--no-signed {
      background-color: #ffab91;
    }
  }
}
</style>