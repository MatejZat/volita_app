<template>
  <transition name="mobile-menu-animation">
    <nav class="mobile-menu">
      <MobileBarMenuUser />

      <MenuNav>
        <MenuNavItem title="Nástenka" icon-name="Home"  route-name="Dashboard" />
        <MenuNavItem title="Kalendár" icon-name="Calendar"  route-name="Calendar" />

        <MenuNavItem v-slot="slotProps" title="Adresár" icon-name="Home" is-dropdown>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Dashboard">Klienti</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Calendar">Kontaktné osoby</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Dashboard">Lead</MenuNavDropdownItem>
        </MenuNavItem>

        <MenuNavItem v-slot="slotProps" title="Obchod" icon-name="Calendar" is-dropdown>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Calendar">Obchodná nástenka</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Dashboard">Obchodné prípady</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Calendar">Ponuky</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Dashboard">Objednávky</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Calendar">Projekty</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Dashboard">Produkty</MenuNavDropdownItem>
          <MenuNavDropdownItem @click="slotProps.closeDropdown" route-name="Calendar">Cenníky</MenuNavDropdownItem>
        </MenuNavItem>
      </MenuNav>

      <MobileBarMenuMetas />
    </nav>
  </transition>
</template>

<script>
  import MobileBarMenuUser from '@/components/MobileBar/MobileBarMenuUser';
  import MenuNav from '@/components/MenuNav/MenuNav';
  import MenuNavItem from '@/components/MenuNav/MenuNavItem';
  import MenuNavDropdownItem from '@/components/MenuNav/MenuNavDropdownItem';
  import MobileBarMenuMetas from '@/components/MobileBar/MobileBarMenuMetas';

  export default {
    components: {
      MobileBarMenuUser,
      MenuNav,
      MenuNavItem,
      MenuNavDropdownItem,
      MobileBarMenuMetas
    },
  };
</script>

<style lang="scss" scoped>
  .mobile-menu {
    padding: rem(20);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    color: $white;

    @include breakpointUp($md) {
      padding: rem(30);
    }
  }

  .mobile-menu-animation-enter-active,
  .mobile-menu-animation-leave-active {
    transition: transform $mobileBarSpeed;
  }

  .mobile-menu-animation-enter-from {
    transform: translateX(-100%);
  }

  .mobile-menu-animation-leave-to {
    position: absolute;
    transform: translateX(-100%);
  }
</style>
