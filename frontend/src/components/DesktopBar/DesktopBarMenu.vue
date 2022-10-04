<template>
  <aside>
    <div class="sidebar-content">
      sidebar
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  aside {
    position: fixed;
    z-index: 1000;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 8px;
    background: $primary;

    .sidebar-content {
      padding: rem(20);
    }
  }
</style>