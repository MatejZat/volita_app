<template>
    <transition name="mobile-menu-animation">
        <nav class="mobile-menu">
            <MobileBarMenuUser/>

            <MenuNav>
                <MenuNavItem title="Nástenka" icon-name="Clipboard" route-name="Dashboard"/>
                <MenuNavItem title="Kalendár" icon-name="Calendar" route-name="Calendar"/>

                <MenuNavItem v-slot="slotProps" title="Adresár" icon-name="Folder" is-dropdown>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Klienti" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Kontaktné osoby" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Lead" route-name="Dashboard"/>
                </MenuNavItem>

                <MenuNavItem v-slot="slotProps" title="Obchod" icon-name="Dollar" is-dropdown>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Obchodná nástenka" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Obchodné prípady" route-name="BusinessCases"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Ponuky" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Objednávky" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Projekty" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Produkty" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" title="Cenníky" route-name="Calendar"/>
                </MenuNavItem>
            </MenuNav>

            <MobileBarMenuMetas/>
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
