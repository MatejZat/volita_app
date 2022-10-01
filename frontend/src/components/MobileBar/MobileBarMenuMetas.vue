<template>
    <footer>
        <MenuNav vertical>
            <MenuNavItem icon="bell" title="Hlásenia" routeName="Dashboard" small />
            <MenuNavItem icon="settings" title="Nastavenia" routeName="Dashboard" small />
            <MenuNavItem icon="log-out" title="Odhlásiť sa" routeName="Dashboard" small />
        </MenuNav>
    </footer>
</template>

<script>
import MenuNav from "@/components/MenuNav/MenuNav";
import MenuNavItem from "@/components/MenuNav/MenuNavItem";

export default {
  components: {
    MenuNav,
    MenuNavItem
  },
}
</script>

