<template>
  <li class="menu-nav-dropdown-item">
    <AppButton ripple rippleWhite>
      <a @click.prevent="handleClick" href="#">
        <h3>
          <slot />
        </h3>
      </a>
    </AppButton>
  </li>
</template>

<script>
  import AppButton from '@/components/AppButton';

  export default {
    props: {
      routeName: String,
    },

    components: {
      AppButton,
    },

    methods: {
      handleClick() {
        this.$router.push({ name: this.routeName });
        this.$store.commit('toggleMenuOpen');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .menu-nav-dropdown-item a {
    padding: rem(8) 0;
    display: inline-block;
    font-size: rem(16);
    color: $primaryContrast;

    @include breakpointUp($md) {
      padding: rem(10) 0;
    }
  }
</style>