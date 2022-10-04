<template>
  <ul class="menu-nav" :class="{ 'menu-nav-vertical' : vertical }">
    <slot />
  </ul>
</template>

<script>
  export default {
    props: {
      vertical: Boolean,
      spaceBetween: Number,
      offset: Number
    },
  }
</script>

<style lang="scss">
  .menu-nav {
    display: flex;
    flex-direction: column;

    > li:not(:last-child) {
      margin-bottom: rem(26);
    }

    &-vertical {
      flex-direction: row;

      > li:not(:last-child) {
        margin-right: rem(20);
        margin-bottom: 0;
      }
    }
  }
</style>