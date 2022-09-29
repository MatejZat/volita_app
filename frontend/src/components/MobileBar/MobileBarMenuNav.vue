<template>
  <ul class="menu-nav" :class="{ 'menu-nav-vertical' : vertical }">
    <slot />
  </ul>
</template>

<script>
export default {
  props: {
    vertical: Boolean,
    spaceBetween: Number
  },
}
</script>

<style lang="scss">
.menu-nav {
  > li {
    margin-bottom: rem(20);

    &:last-child {
      margin-bottom: 0;
    }

    @include breakpointUp($md) {
      margin-bottom: rem(30);
    }
  }

  &-vertical {
    display: flex;

    > li {
      margin-right: rem(20);
      margin-bottom: rem(0);

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>