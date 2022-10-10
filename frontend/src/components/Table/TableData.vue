<template>
  <component :is="tag" class="app-table-data">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      tag: String,
    },
  }
</script>

<style lang="scss" scoped>
  .app-table-data {
    padding: rem(12) rem(20);
    display: table-cell;
  }
</style>