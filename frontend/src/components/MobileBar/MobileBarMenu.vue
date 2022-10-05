<template>
  <transition name="menu-slide">
    <nav class="menu-wrapper">
      <MobileBarMenuUser />

      <MenuNav>
        <MenuNavItem title="Nástenka" iconName="Home"  routeName="Dashboard" />
        <MenuNavItem title="Kalendár" iconName="Calendar"  routeName="Calendar" />

        <MenuNavItemDropdown v-slot="slotProps" title="Adresár" iconName="Home">
          <DropdownItem @click="slotProps.closeDropdown" routeName="Dashboard">Klienti</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Calendar">Kontaktné osoby</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Dashboard">Lead</DropdownItem>
        </MenuNavItemDropdown>

        <MenuNavItemDropdown v-slot="slotProps" title="Obchod" iconName="Calendar">
          <DropdownItem @click="slotProps.closeDropdown" routeName="Calendar">Obchodná nástenka</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Dashboard">Obchodné prípady</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Calendar">Ponuky</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Dashboard">Objednávky</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Calendar">Projekty</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Dashboard">Produkty</DropdownItem>
          <DropdownItem @click="slotProps.closeDropdown" routeName="Calendar">Cenníky</DropdownItem>
        </MenuNavItemDropdown>
      </MenuNav>

      <MobileBarMenuMetas />
    </nav>
  </transition>
</template>

<script>
  import MobileBarMenuUser from '@/components/MobileBar/MobileBarMenuUser';
  import MenuNav from '@/components/MenuNav/MenuNav';
  import MenuNavItem from '@/components/MenuNav/MenuNavItem';
  import MenuNavItemDropdown from '@/components/MenuNav/MenuNavItemDropdown';
  import DropdownItem from '@/components/MenuNav/DropdownItem';
  import MobileBarMenuMetas from '@/components/MobileBar/MobileBarMenuMetas';

  export default {
    components: {
      MobileBarMenuUser,
      MenuNav,
      MenuNavItem,
      MenuNavItemDropdown,
      DropdownItem,
      MobileBarMenuMetas
    },
  };
</script>

<style lang="scss" scoped>
  .menu-wrapper {
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
