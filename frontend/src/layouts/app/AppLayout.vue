<template>
  <component :is="currentLayout">
    <RouterView v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </component>
</template>

<script>
  // CSS
  import '@/assets/sass/app/app.scss';

  // Layout components
  import MobileLayout from '@/layouts/app/AppLayouts/TheMobileLayout';
  import DesktopLayout from '@/layouts/app/AppLayouts/TheDesktopLayout';

  export default {
    components: {
      MobileLayout,
      DesktopLayout
    },

    data() {
      return {
        currentLayout: 'MobileLayout'
      }
    },

    created() {
      this.switchLayout();
      document.querySelector('body').classList.add('app');
    },

    unmounted() {
      document.body.classList.remove('app')
    },

    methods: {
      switchLayout() {
        window.innerWidth <= 1024 ? this.currentLayout = 'MobileLayout' : this.currentLayout = 'DesktopLayout';
      }
    },
  }
</script>

<style lang="scss" scoped>
  .page-transition-enter-from {
    opacity: 0;
    transform: translateX(80px);
  }

  .page-transition-enter-active,
  .page-transition-leave-active {
    transition: all $pageTransitionSpeed;
  }

  .page-transition-leave-to {
    opacity: 0;
    transform: translateX(-80px);
  }
</style>