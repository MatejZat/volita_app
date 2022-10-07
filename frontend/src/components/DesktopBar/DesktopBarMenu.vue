<template>
  <aside ref="websiteMenu" :class="{ 'website-menu-expand' : isExpandedClass }">
    <a @click.prevent="toggleExpand" href="#" class="website-menu-expand-icon" :class="{ 'website-menu-expand-icon-open' : isExpandedClass }">
      <AppIcon icon-name="ChevRight" />
    </a>

    <div class="sidebar-content">
      <MenuNav>
        <MenuNavItem title="Nástenka" icon-name="Home"  route-name="Dashboard" />
        <MenuNavItem title="Kalendár" icon-name="Calendar"  route-name="Calendar" />

        <MenuNavItem title="Adresár" icon-name="Home" is-dropdown>
          <MenuNavDropdownItem route-name="Dashboard">Klienti</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Calendar">Kontaktné osoby</MenuNavDropdownItem>
          <MenuNavDropdownItem route-name="Dashboard">Lead</MenuNavDropdownItem>
        </MenuNavItem>

        <MenuNavItem title="Obchod" icon-name="Calendar" is-dropdown>
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
        isExpanded: 'hidden'
      }
    },

    mounted() {
      this.setUserExpandOption();
    },

    computed: {
      isExpandedClass() {
        return this.isExpanded === 'expanded' ? true : false;
      },
    },

    methods: {
      setUserExpandOption() {
        const userExpandOption = localStorage.getItem('menuExpanded');

        if( !userExpandOption ) {
          localStorage.setItem('menuExpanded', 'hidden');
        }

        this.isExpanded = userExpandOption;
      },

      toggleExpand() {
        const chooseExpansion = this.isExpanded === 'expanded' ? 'hidden' : 'expanded';

        this.isExpanded = chooseExpansion;
        localStorage.setItem('menuExpanded', chooseExpansion);
      },
    },

    watch: {
      isExpanded() {
        if( this.isExpanded === 'expanded' ) {
          this.$emit('menuExpand', 220);
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
    z-index: 1000;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 8px;
    background: $primary;
    will-change: width;
    transition: width $defaultSpeed;

    &:hover {
      width: 220px;
    }

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
      padding: rem(40) rem(20) rem(30) rem(20);
      color: $white;
    }
  }

  .website-menu-expand {
    width: 220px;
  }
</style>