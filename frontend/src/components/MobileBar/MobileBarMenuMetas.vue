<template>
  <footer>
    <MenuNav vertical>
      <MenuNavItem title="Hlásenia" iconName="Bell" @click="closeMenu" small />
      <MenuNavItem title="Nastavenia" iconName="Settings" @click="closeMenu" small />
      <MenuNavItem title="Odhlásiť sa" iconName="Logout" @click="closeMenu" small />
    </MenuNav>
  </footer>
</template>

<script>
  import MenuNav from '@/components/MenuNav/MenuNav';
  import MenuNavItem from '@/components/MenuNav/MenuNavItem';

  export default {
    components: {
      MenuNav,
      MenuNavItem,
    },

    methods: {
      closeMenu() {
        this.$emit('itemClicked');
      }
    },
  }
</script>

