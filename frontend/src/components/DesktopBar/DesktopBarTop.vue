<template>
  <header>
    <div class="top-bar-content">
      <AppButton ripple>
        <IconMenu />
      </AppButton>

      <div class="search-input-container">
        <AppInput placeholder="Vyhľadávajte..." />
      </div>

      <div>
        user
      </div>
    </div>
  </header>
</template>

<script>
  import AppButton from '@/components/AppButton';
  import IconMenu from '@/components/Icons/IconMenu';
  import AppInput from '@/components/AppInput';

  export default {
    components: {
      AppButton,
      IconMenu,
      AppInput
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar-content {
    padding: rem(20);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search-input-container {
      width: 380px;
    }
  }
</style>