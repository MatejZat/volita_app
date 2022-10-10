<template>
  <div class="app-table-wrapper">
    <table class="app-table font-nunito">
      <slot />
    </table>
  </div>
</template>

<script></script>

<style lang="scss">
  .app-table-wrapper {
    @include breakpointDown(900px) {
      overflow-x: scroll;
    }

    .app-table {
      min-width: rem(800);
      width: 100%;
      display: table;
      overflow: hidden;
      font-size: $font12;
      text-align: left;
      border-radius: 12px;
    }
  }
</style>