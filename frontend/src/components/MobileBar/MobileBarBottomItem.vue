<template>
  <router-link to="/" class="mobile-bottom-bar-item" :class="{'mobile-bottom-bar-item-active': isActive, 'mobile-bottom-bar-item-expand': isExpanded}">
    <figure class="icon-wrapper">
      <VueFeather :type="icon" />
    </figure>

    <h6>{{ title }}</h6>
  </router-link>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    isExpanded: Boolean,
    icon: String,
    title: String
  },
}
</script>

<style lang="scss" scoped>
.mobile-bottom-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  &-active {
    color: $primary;
  }

  &-expand {
    .icon-wrapper {
      padding: rem(10);
      border-radius: 100%;
      color: $white;
      background: $primary;
    }
  }

  h6 {
    font-size: $font10;

    @include breakpointUp($md) {
      font-size: $font12;
    }
  }

  .icon-wrapper {
    margin-bottom: rem(4);
  }
}
</style>