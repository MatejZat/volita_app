<template>
  <header class="top-bar">
    <div class="top-bar-content">
      <router-link to="/">
        <img src="@/assets/img/icons/chevron-left.svg" alt="Chevron left icon">
      </router-link>

      <h3>Objednávky</h3>

      <img src="@/assets/img/icons/hamburger.svg" alt="Hamburger menu icon">
    </div>
  </header>
</template>

<style lang="scss" scoped>
.top-bar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  backdrop-filter: blur(8px);
  background: rgba($white, 0.6);

  .top-bar-content {
    padding: rem(20);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>