<template>
  <div class="wrapper">
    <MobileBarMenu v-show="isMenuOpen" />

    <div class="website-wrapper" :class="{ 'menu-open' : isMenuOpen }">
      <div v-show="isMenuOpen" class="overlay" @click="toggleMenu" />

      <MobileBarTop @menuIconClick="toggleMenu" />

      <main>
        <div class="container">
          <slot/>
        </div>
      </main>

      <MobileBarBottom />
    </div>
  </div>
</template>

<script>
  import MobileBarTop from '@/components/MobileBar/MobileBarTop';
  import MobileBarBottom from '@/components/MobileBar/MobileBarBottom';
  import MobileBarMenu from '@/components/MobileBar/MobileBarMenu';

  export default {
    components: {
      MobileBarTop,
      MobileBarBottom,
      MobileBarMenu
    },

    computed: {
      isMenuOpen() {
        return this.$store.getters.isMenuOpen;
      }
    },

    methods: {
      toggleMenu() {
        this.$store.commit('toggleMenuOpen');
      }
    },
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background: $primary;
  }

  .website-wrapper {
    width: 100%;
    overflow: hidden;
    transform-origin: right center;
    z-index: 1;
    background: $whiteDarker;
    transition: all $mobileBarSpeed;

    main {
      height: 100vh;
      overflow: auto;
    }

    .overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2000;
    }
  }

  .menu-open {
    position: absolute;
    border-radius: 12px;
    transform: scale(0.6) translateX(40%);

    @include breakpointUp($md) {
      transform: scale(0.7) translateX(30%);
    }

    main {
      overflow: hidden;
    }
  }
</style>
