<template>
  <form :style="{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`}" class="app-form">
    <slot />
  </form>
</template>

<script>
  export default {
    props: {
      cols: Number,
    },
  }
</script>

<style lang="scss">
  .app-form {
    display: grid;
    gap: 10px;
  }
</style>