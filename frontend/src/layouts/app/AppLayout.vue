<template>
  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </component>
</template>

<script>
  import '@/assets/sass/app/app.scss';
  import MobileLayout from '@/layouts/app/AppLayouts/AppMobileLayout';
  import DesktopLayout from '@/layouts/app/AppLayouts/AppDesktopLayout';

  export default {
    components: {
      MobileLayout,
      DesktopLayout
    },

    data() {
      return {
        layout: 'MobileLayout'
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
        window.innerWidth < 1024 ? this.layout = 'MobileLayout' : this.layout = 'DesktopLayout';
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