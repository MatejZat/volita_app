<template>
  <header class="top-bar">
    <div class="top-bar-content">
      <AppButton ripple>
        <a @click.prevent="goBack" href="#">
          <IconChevLeft />
        </a>
      </AppButton>

        <h3>Objednávky</h3>

        <AppButton @click="openMenu" ripple>
          <IconMenu />
        </AppButton>
    </div>
  </header>
</template>

<script>
  import AppButton from '@/components/AppButton';
  import IconChevLeft from '@/components/Icons/IconChevLeft';
  import IconMenu from '@/components/Icons/IconMenu';

  export default {
    components: {
      AppButton,
      IconChevLeft,
      IconMenu
    },

    methods: {
      openMenu() {
        this.$emit( 'menuIconClick' );
      },

      goBack() {
        return this.$router.go(-1);
      }
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    backdrop-filter: blur(8px);
    background: rgba($white, 0.8);

    .top-bar-content {
      padding: rem(20);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>