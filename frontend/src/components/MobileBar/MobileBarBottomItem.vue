<template>
  <AppButton ripple>
    <RouterLink :to="{ name: routeName }" class="mobile-bottom-bar-item" :class="{ 'mobile-bottom-bar-item-expand': isExpanded }">
      <figure class="icon-wrapper">
        <AppIcon :iconName="iconName" />
      </figure>

      <h6>{{ title }}</h6>
    </RouterLink>
  </AppButton>
</template>

<script>
  import AppButton from '@/components/AppButton';
  import AppIcon from '@/components/AppIcon';

  export default {
    props: {
      title: String,
      iconName: String,
      routeName: String,
      isExpanded: Boolean
    },

    components: {
      AppButton,
      AppIcon
    },
  }
</script>

<style lang="scss" scoped>
  .mobile-bottom-bar-item {
    display: flex;
    flex-direction: column;
    align-items: center;

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

      svg {
        width: rem(24);

        @include breakpointUp($md) {
          width: rem(28);
        }
      }
    }
  }

  .router-link-exact-active {
    color: $primary;
  }
</style>