<template>
  <li class="nav-item" :class="{ 'text-small' : small }">
    <figure class="icon-wrapper">
      <VueFeather :type="icon" />
    </figure>

    <RouterLink :to="href">{{ title }}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    href: String,
    small: Boolean
  },
}
</script>

<style lang="scss" scoped>
.nav-item {
  display: flex;
  align-items: center;

  .icon-wrapper {
    margin-right: rem(10);
  }

  i {
    width: rem(20);

    @include breakpointUp($md) {
      width: rem(32);
    }
  }

  a {
    font-family: 'Nunito', sans-serif;
    font-size: rem(20);

    @include breakpointUp($md) {
      font-size: rem(24);
    }
  }
}

.text-small {
  i {
    width: rem(14);

    @include breakpointUp($md) {
      width: rem(20);
    }
  }

  a {
    font-size: rem(10) !important;

    @include breakpointUp($md) {
      font-size: rem(13) !important;
    }
  }
}
</style>