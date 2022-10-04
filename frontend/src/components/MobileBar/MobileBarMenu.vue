<template>
  <transition name="menu-slide">
    <nav class="menu-wrapper">
      <MobileBarMenuUser />

      <MenuNav>
        <MenuNavItem title="Nástenka" iconName="Home"  routeName="Dashboard" />
        <MenuNavItem title="Kalendár" iconName="Calendar"  routeName="Calendar" />

        <MenuNavItem title="Adresár" iconName="Home">
          <MenuDropdown>
            <MenuDropdownItem routeName="Dashboard">Klienti</MenuDropdownItem>
            <MenuDropdownItem routeName="Calendar">Kontaktné osoby</MenuDropdownItem>
            <MenuDropdownItem routeName="Dashboard">Lead</MenuDropdownItem>
          </MenuDropdown>
        </MenuNavItem>

        <MenuNavItem title="Obchod" iconName="Calendar">
          <MenuDropdown>
            <MenuDropdownItem routeName="Calendar">Obchodná nástenka</MenuDropdownItem>
            <MenuDropdownItem routeName="Dashboard">Obchodné prípady</MenuDropdownItem>
            <MenuDropdownItem routeName="Calendar">Ponuky</MenuDropdownItem>
            <MenuDropdownItem routeName="Dashboard">Objednávky</MenuDropdownItem>
            <MenuDropdownItem routeName="Calendar">Projekty</MenuDropdownItem>
            <MenuDropdownItem routeName="Dashboard">Produkty</MenuDropdownItem>
            <MenuDropdownItem routeName="Calendar">Cenníky</MenuDropdownItem>
          </MenuDropdown>
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
  import MenuDropdown from '@/components/MenuNav/MenuDropdown';
  import MenuDropdownItem from '@/components/MenuNav/MenuDropdownItem';
  import MobileBarMenuMetas from '@/components/MobileBar/MobileBarMenuMetas';

  export default {
    components: {
      MobileBarMenuUser,
      MenuNav,
      MenuNavItem,
      MenuDropdown,
      MenuDropdownItem,
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
