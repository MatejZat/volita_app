<template>
  <nav class="menu">
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
}
</script>

<style lang="scss" scoped>
.menu {
  padding: rem(20);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $white;

  @include breakpointUp($md) {
    padding: rem(30);
  }
}
</style>