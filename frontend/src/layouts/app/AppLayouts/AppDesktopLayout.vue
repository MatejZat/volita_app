<template>
  <DesktopBarTop />

  <div class="content-wrapper">
    <DesktopBarMenu />

    <main>
      <DesktopBarMetas />

      <div class="container">
        <slot/>
      </div>
    </main>
  </div>
</template>

<script>
  import DesktopBarTop from '@/components/DesktopBar/DesktopBarTop';
  import DesktopBarMenu from '@/components/DesktopBar/DesktopBarMenu';
  import DesktopBarMetas from '@/components/DesktopBar/DesktopBarMetas';

  export default {
    components: {
      DesktopBarTop,
      DesktopBarMenu,
      DesktopBarMetas
    },
  }
</script>

<style lang="scss" scoped>
  .content-wrapper {
    display: flex;
  }
</style>