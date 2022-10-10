<template>
  <component :is="wrapper">
    <slot />
  </component>
</template>

<script>
  export default {
    props: {
      wrapper: String,
    },
  }
</script>

<style lang="scss">
  thead {
    display: table-header-group;
    background: $primaryContrast;
  }

  tbody {
    display: table-row-group;

    tr:nth-child(odd) {
      background: #F9F9F9;
    }
  }
</style>