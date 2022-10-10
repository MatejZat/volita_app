<template>
  <div :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`}" class="app-form-wrapper">
    <slot />
  </div>
</template>

<script>
  export default {
    props: {
      cols: Number,
    },
  }
</script>

<style lang="scss" scoped>
  .app-form-wrapper {
    margin-bottom: rem(10);
    display: grid;
    gap: 10px;

    @include breakpointDown($lg) {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }

    @include breakpointDown($md) {
      grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    }
  }
</style>