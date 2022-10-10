<template>
  <tr class="app-table-row">
    <slot />
  </tr>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .app-table-row {
    display: table-row;
    border-bottom: 2px solid $primaryContrast;
  }
</style>