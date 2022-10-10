<template>
  <aside ref="websiteMenu" :class="{ 'website-menu-expand' : menuExpandedClass }">
    <a @click.prevent="toggleExpand" href="#" class="website-menu-expand-icon" :class="{ 'website-menu-expand-icon-open' : menuExpandedClass }">
      <AppIcon icon-name="ChevRight" />
    </a>

    <div class="sidebar-content">
      <MenuNav>
        <MenuNavItem title="Nástenka" icon-name="Home" route-name="Dashboard" :is-menu-expanded="menuExpanded" />
        <MenuNavItem title="Kalendár" icon-name="Calendar" route-name="Calendar" :is-menu-expanded="menuExpanded" />

        <MenuNavItem title="Adresár" icon-name="Home" :is-menu-expanded="menuExpanded" is-dropdown>
          <MenuNavDropdownItem route-name="Dashboard">Klienti</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Calendar">Kontaktné osoby</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Dashboard">Lead</MenuNavDropdownItem>
        </MenuNavItem>

        <MenuNavItem title="Obchod" icon-name="Calendar" :is-menu-expanded="menuExpanded" is-dropdown>
          <MenuNavDropdownItem route-name="Calendar">Obchodná nástenka</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Dashboard">Obchodné prípady</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Calendar">Ponuky</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Dashboard">Objednávky</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Calendar">Projekty</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Dashboard">Produkty</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Calendar">Cenníky</MenuNavDropdownItem>
        </MenuNavItem>
      </MenuNav>
    </div>
  </aside>
</template>

<script>
  import AppIcon from '@/components/AppIcon';
  import MenuNav from "@/components/MenuNav/MenuNav";
  import MenuNavItem from "@/components/MenuNav/MenuNavItem";
  import MenuNavDropdownItem from "@/components/MenuNav/MenuNavDropdownItem";

  export default {
    components: {
      AppIcon,
      MenuNav,
      MenuNavItem,
      MenuNavDropdownItem
    },

    data() {
      return {
        menuExpanded: 'hidden'
      }
    },

    mounted() {
      this.setUserExpandOption();
    },

    computed: {
      menuExpandedClass() {
        return this.menuExpanded === 'expanded' ? true : false;
      },
    },

    methods: {
      setUserExpandOption() {
        const userExpandOption = localStorage.getItem('menuExpanded');

        if( !userExpandOption ) {
          localStorage.setItem('menuExpanded', 'hidden');
        }

        this.menuExpanded = userExpandOption;
      },

      toggleExpand() {
        const chooseExpansion = this.menuExpanded === 'expanded' ? 'hidden' : 'expanded';

        this.menuExpanded = chooseExpansion;
        localStorage.setItem('menuExpanded', chooseExpansion);
      },
    },

    watch: {
      menuExpanded() {
        if( this.menuExpanded === 'expanded' ) {
          this.$emit('menuExpand', 200);
        } else {
          this.$emit('menuExpand', 64);
        }
      }
    },
  }
</script>

<style lang="scss" scoped>
  aside {
    width: 64px;
    height: calc(100vh - 80px);
    position: fixed;
    bottom: 0;
    z-index: 1000;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 8px;
    background: $primary;
    will-change: width;
    transition: width $defaultSpeed;

    .website-menu-expand-icon {
      padding: rem(2);
      position: absolute;
      top: 0;
      right: 0;
      color: $primary;
      border: 2px solid $primaryContrast;
      border-radius: 20px;
      background: $white;
      transition: transform $defaultSpeed;

      &-open {
        transform: rotate(-180deg);
      }
    }

    .sidebar-content {
      padding-top: rem(40);
      padding-bottom: rem(30);
      color: $white;
    }
  }

  .website-menu-expand {
    width: 200px;
  }
</style>