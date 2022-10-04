<template>
  <footer class="bottom-bar">
    <div class="bottom-bar-content">
      <MobileBarBottomItem title="Domov" iconName="Home" routeName="Dashboard" />
      <MobileBarBottomItem title="Kalendár" iconName="Calendar" routeName="Calendar" />
      <MobileBarBottomItem title="Domov" iconName="Plus" routeName="Dashboard" isExpanded />
      <MobileBarBottomItem title="Domov" iconName="Home" routeName="Login" />
      <MobileBarBottomItem title="Domov" iconName="Home" routeName="Calendar" />
    </div>

    <MobileBarBottomItemWave />
  </footer>
</template>

<script>
  import MobileBarBottomItem from '@/components/MobileBar/MobileBarBottomItem';
  import MobileBarBottomItemWave from '@/components/MobileBar/MobileBarBottomItemWave';

  export default {
    components: {
      MobileBarBottomItem,
      MobileBarBottomItemWave,
    },
  }
</script>

<style lang="scss" scoped>
  .bottom-bar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background: $white;

    .bottom-bar-content {
      padding: rem(10) rem(20);
      margin: rem(-20) auto 0 auto;
      max-width: 660px;
      display: flex;
      justify-content: center;
      align-items: flex-end;

      > * {
        width: 60px;

        &:not(:last-child) {
          margin-right: rem(20);

          @include breakpointUp($md) {
            margin-right: rem(30);
          }
        }
      }
    }
  }
</style>