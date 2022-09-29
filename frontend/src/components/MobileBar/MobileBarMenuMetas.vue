<template>
  <footer>
    <MobileBarMenuNav vertical>
      <MobileBarMenuNavItem icon="bell" title="Hlásenia" href="/" small />
      <MobileBarMenuNavItem icon="settings" title="Nastavenia" href="/" small />
      <MobileBarMenuNavItem icon="log-out" title="Odhlásiť sa" href="/" small />
    </MobileBarMenuNav>
  </footer>
</template>

<script>
import MobileBarMenuNav from "@/components/MobileBar/MobileBarMenuNav";
import MobileBarMenuNavItem from "@/components/MobileBar/MobileBarMenuNavItem";

export default {
  components: {
    MobileBarMenuNav,
    MobileBarMenuNavItem
  },
}
</script>

