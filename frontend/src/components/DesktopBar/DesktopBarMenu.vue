<template>
  <aside ref="websiteMenu" :class="{ 'website-menu-expand' : isExpanded }">
    <div @click="toggleExpand" class="menu-expand">
      <AppIcon icon-name="ChevLeft" />
    </div>

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
        isExpanded: false
      }
    },

    mounted() {
      const websiteMenu = this.$refs.websiteMenu;

      websiteMenu.addEventListener('mouseover', () => {
        websiteMenu.classList.add('website-menu-expand');
      });

      websiteMenu.addEventListener('mouseout', () => {
        if( !this.isExpanded ) {
          websiteMenu.classList.remove('website-menu-expand');
        }
      });
    },

    methods: {
      toggleExpand() {
        this.isExpanded = !this.isExpanded;
      }
    },

    watch: {
      isExpanded() {
        if( this.isExpanded ) {
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

    .menu-expand {
      padding: rem(2) rem(3) rem(2) rem(2);
      position: absolute;
      top: 0;
      left: 0;
      color: $primary;
      border: 2px solid $primaryContrast;
      border-radius: 20px;
      background: $white;
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