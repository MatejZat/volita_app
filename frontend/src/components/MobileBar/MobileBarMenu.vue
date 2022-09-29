<template>
  <nav class="menu" :style="{ height: innerHeight }">
    <MobileBarMenuUser />

    <MobileBarMenuNav>
      <MobileBarMenuNavItem icon="home" title="Domov" href="/" />
      <MobileBarMenuNavItem icon="home" title="Domov" href="/" />
      <MobileBarMenuNavItem icon="home" title="Domov" href="/" />
      <MobileBarMenuNavItem icon="home" title="Domov" href="/" />
      <MobileBarMenuNavItem icon="home" title="Domov" href="/" />
    </MobileBarMenuNav>

    <MobileBarMenuMetas />
  </nav>
</template>

<script>
import MobileBarMenuUser from "@/components/MobileBar/MobileBarMenuUser";
import MobileBarMenuNav from "@/components/MobileBar/MobileBarMenuNav";
import MobileBarMenuNavItem from "@/components/MobileBar/MobileBarMenuNavItem";
import MobileBarMenuMetas from "@/components/MobileBar/MobileBarMenuMetas";

export default {
  components: {
    MobileBarMenuUser,
    MobileBarMenuNav,
    MobileBarMenuNavItem,
    MobileBarMenuMetas
  },

  computed: {
    innerHeight() {
      return window.innerHeight + 'px';
    }
  },
}
</script>

<style lang="scss" scoped>
.menu {
  padding: rem(20);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $white;

  @include breakpointUp($md) {
    padding: rem(30);
  }
}
</style>