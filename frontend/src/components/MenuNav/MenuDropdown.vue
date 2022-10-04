<template>
  <ul class="dropdown-menu">
    <slot />
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .dropdown-menu {
    padding-left: rem(36);
    margin-top: rem(10);

    @include breakpointUp($md) {
      padding-left: rem(42);
      margin-top: rem(20);
    }

    li {
      &:not(:last-child) {
        margin-bottom: rem(10);
      }
      color: $primaryContrast;
    }
  }
</style>