<template>
  <div class="menu-wrapper">
    <transition name="menu-slide">
      <MobileBarMenu v-show="isMenuOpen" />
    </transition>

    <div class="website-wrapper" :class="{ 'website-wrapper-menu-open' : isMenuOpen }">
      <div v-show="isMenuOpen" class="overlay" @click="toggleMenu"></div>

      <MobileBarTop @hamburgerClick="toggleMenu" />

      <main>
        <slot />
      </main>

      <MobileBarBottom />
    </div>
  </div>
</template>

<script>
import MobileBarTop from "@/components/MobileBar/MobileBarTop";
import MobileBarBottom from "@/components/MobileBar/MobileBarBottom";
import MobileBarMenu from "@/components/MobileBar/MobileBarMenu";

export default {
  components: {
    MobileBarTop,
    MobileBarBottom,
    MobileBarMenu
  },

  data() {
    return {
      isMenuOpen: false
    }
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  },
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background: $primary;
}

.website-wrapper {
  width: 100%;
  transform-origin: right center;
  z-index: 1;
  background: $whiteDarker;
  transition: all $mobileBarSpeed;

  &-menu-open {
    position: absolute;
    overflow: hidden;
    border-radius: 12px;
    transform: scale(0.6) translateX(40%);

    @include breakpointUp($md) {
      transform: scale(0.7) translateX(30%);
    }

    main {
      overflow: hidden;
    }
  }

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

.menu-slide-enter-active,
.menu-slide-leave-active {
  transition: transform $mobileBarSpeed;
}

.menu-slide-enter-from {
  transform: translateX(-100%);
}

.menu-slide-leave-to {
  position: absolute;
  transform: translateX(-100%);
}
</style>
