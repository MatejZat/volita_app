<template>
  <header class="menu-profile">
    <figure class="profile-picture">
      <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/280114475_377986610954435_2742565413912255129_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=4de414&_nc_ohc=whXp1cwswdQAX9HhHah&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVLHnfhoXiyiCaOwTfYvySWrZ1k9mzuCx9StNqXDfH6p1g&oe=635948FF" alt="User profile picture">
    </figure>

    <div class="profile-info">
      <h3>Igor Pecha</h3>
      <h5>Administrátor</h5>
    </div>

    <div>
      <AppIcon iconName="ChevRight" />
    </div>
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
  .menu-profile {
    display: flex;
    align-items: center;

    h5 {
      margin-top: rem(2);
      color: $primaryContrast;
    }

    i {
      width: rem(18);
    }

    .profile-picture {
      margin-right: rem(10);

      img {
        width: rem(32);
        border: 2px solid $primaryContrast;
        border-radius: 6px;

        @include breakpointUp($md) {
          width: rem(44);
        }
      }
    }

    .profile-info {
      margin-right: rem(70);

      @include breakpointUp($md) {
        margin-right: rem(100);
      }
    }
  }
</style>