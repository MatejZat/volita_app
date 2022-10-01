<template>
    <nav class="menu">
        <MobileBarMenuUser/>

        <MenuNav>
            <MenuNavItem icon="home" title="Domov" routeName="Dashboard" @click="closeMenu" />
            <MenuNavItem icon="home" title="Domov" routeName="Calendar" @click="closeMenu" />
            <MenuNavItem icon="home" title="Domov" routeName="Dashboard" @click="closeMenu" />
            <MenuNavItem icon="home" title="Domov" routeName="Calendar" @click="closeMenu" />
            <MenuNavItem icon="home" title="Domov" routeName="Dashboard" @click="closeMenu" />
        </MenuNav>

        <MobileBarMenuMetas/>
    </nav>
</template>

<script>
import MobileBarMenuUser from "@/components/MobileBar/MobileBarMenuUser";
import MenuNav from "@/components/MenuNav/MenuNav";
import MenuNavItem from "@/components/MenuNav/MenuNavItem";
import MobileBarMenuMetas from "@/components/MobileBar/MobileBarMenuMetas";

export default {
    components: {
        MenuNavItem,
        MobileBarMenuUser,
        MenuNav,
        MobileBarMenuMetas,
    },

    methods: {
        closeMenu() {
            this.$emit('routeChange')
        }
    },
};
</script>

<style lang="scss" scoped>
.menu {
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
</style>
