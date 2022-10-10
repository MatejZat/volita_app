<template>
  <header class="mobile-menu-profile">
    <figure class="mobile-menu-profile-picture">
      <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/280114475_377986610954435_2742565413912255129_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=4de414&_nc_ohc=whXp1cwswdQAX9HhHah&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLHnfhoXiyiCaOwTfYvySWrZ1k9mzuCx9StNqXDfH6p1g&oe=635948FF" alt="User profile picture">
    </figure>

    <div class="mobile-menu-profile-info">
      <h4>Igor Pecha</h4>
      <h5>Administrátor</h5>
    </div>

    <figure>
      <AppIcon icon-name="ChevRight" />
    </figure>
  </header>
</template>

<script>
  import AppIcon from '@/components/AppIcon';

  export default {
    components: {
      AppIcon
    },
  }
</script>

<style lang="scss" scoped>
  .mobile-menu-profile {
    display: flex;
    align-items: center;

    h5 {
      margin-top: rem(2);
      color: $primaryContrast;
    }

    svg {
      width: rem(16);
    }

    &-picture {
      margin-right: rem(10);

      img {
        width: rem(32);
        border: 2px solid $primaryContrast;
        border-radius: 4px;

        @include breakpointUp($md) {
          width: rem(38);
        }
      }
    }

    &-info {
      margin-right: rem(60);
    }
  }
</style>