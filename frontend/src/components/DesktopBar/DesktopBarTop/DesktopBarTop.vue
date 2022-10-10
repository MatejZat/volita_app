<template>
  <header ref="desktopBarTop" class="top-bar">
    <div class="top-bar-content">
      <DesktopBarTopLogo />
      <DesktopBarTopSearch />
      <DesktopBarTopUser />
    </div>
  </header>
</template>

<script>
  import DesktopBarTopLogo from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopLogo';
  import DesktopBarTopSearch from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopSearch';
  import DesktopBarTopUser from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopUser';

  export default {
    components: {
      DesktopBarTopLogo,
      DesktopBarTopUser,
      DesktopBarTopSearch
    },

    mounted() {
      window.addEventListener('scroll', this.isScrolled);
    },

    methods: {
      isScrolled() {
        const desktopBarTop = this.$refs.desktopBarTop;

        if( window.scrollY > 5 ) {
          desktopBarTop.classList.add('top-bar-scrolled');
        } else {
          desktopBarTop.classList.remove('top-bar-scrolled');
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    transition: background-color $defaultSpeed;

    &-content {
      padding: rem(20);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo-container,
      .user-container {
        flex-basis: 0;
        flex-grow: 1;
      }
    }

    &-scrolled {
      backdrop-filter: blur(8px);
      background: rgba($whiteDarker, 0.8);
    }
  }
</style>