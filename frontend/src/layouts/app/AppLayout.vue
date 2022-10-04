<template>
  <MobileLayout v-if="isMobile">
    <RouterView v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </MobileLayout>

  <DesktopLayout v-else>
    <RouterView v-slot="{ Component }">
      <transition name="page-transition" mode="out-in">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </DesktopLayout>
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
        isMobile: true
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
        window.innerWidth < 1024 ? this.isMobile = true : this.isMobile = false;
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