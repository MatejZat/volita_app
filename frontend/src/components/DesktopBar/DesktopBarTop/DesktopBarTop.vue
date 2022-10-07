<template>
  <header>
    <div class="top-bar-content">
      <DesktopBarTopLogo />
      <DesktopBarTopSearch />
      <DesktopBarTopUser />
    </div>
  </header>
</template>

<script>
  import DesktopBarTopLogo from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopLogo';
  import DesktopBarTopSearch from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopSearch';
  import DesktopBarTopUser from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopUser';

  export default {
    components: {
      DesktopBarTopLogo,
      DesktopBarTopUser,
      DesktopBarTopSearch
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar-content {
    padding: rem(20);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container,
    .user-container {
      flex-basis: 0;
      flex-grow: 1;
    }
  }
</style>