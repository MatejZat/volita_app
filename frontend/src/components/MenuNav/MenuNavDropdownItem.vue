<template>
  <li class="menu-nav-dropdown-item">
    <AppButton @click="handleClick" ripple ripple-white>
      <span class="font-nunito">
        <slot />
      </span>
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
  .menu-nav-dropdown-item {
    span {
      padding: rem(8) 0;
      display: inline-block;
      font-size: rem(12);
      color: $primaryContrast;

      @include breakpointUp($md) {
        font-size: rem(14);
      }
    }

    .ripple-button {
      width: auto;
    }
  }
</style>