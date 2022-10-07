<template>
  <header>
    <div class="desktop-bar-metas-content">
      <h3>Page name</h3>

      <DesktopBarMetasArrows />
    </div>
  </header>
</template>

<script>
  import DesktopBarMetasArrows from '@/components/DesktopBar/DesktopBarMetasArrows';
  
  export default {
    components: {
      DesktopBarMetasArrows,
    },
  }
</script>

<style lang="scss" scoped>
  .desktop-bar-metas-content {
    padding: 0 rem(20);
    display: flex;
    justify-content: space-between;
  }
</style>