<template>
  <svg class="svg">
    <use :xlink:href="require('@/assets/icons.svg') + `#${icon}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
.svg {
  stroke-dasharray: 320;
  stroke-dashoffset: 0;
  animation: dash 1s linear;
  height: 20px;
  width: 20px;
  stroke: #000000;
  stroke-width: 3;

  @keyframes dash {
    from {
      stroke-dashoffset: 320;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>