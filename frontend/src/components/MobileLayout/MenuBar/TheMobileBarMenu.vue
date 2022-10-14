<template>
    <transition name="mobile-menu-animation">
        <nav class="mobile-menu">
            <MobileBarMenuUser/>

            <MenuNav>
                <MenuNavItem text="Nástenka" icon-name="Clipboard" route-name="Dashboard"/>
                <MenuNavItem text="Kalendár" icon-name="Calendar" route-name="Calendar"/>

                <MenuNavItem v-slot="slotProps" text="Adresár" icon-name="Folder" has-dropdown>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Klienti" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Kontaktné osoby" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Lead" route-name="Dashboard"/>
                </MenuNavItem>

                <MenuNavItem v-slot="slotProps" text="Obchod" icon-name="Dollar" has-dropdown>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Obchodná nástenka" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Obchodné prípady" route-name="BusinessCases"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Ponuky" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Objednávky" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Projekty" route-name="Calendar"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Produkty" route-name="Dashboard"/>
                    <MenuNavDropdownItem @click="slotProps.closeDropdown" text="Cenníky" route-name="Calendar"/>
                </MenuNavItem>
            </MenuNav>

            <MobileBarMenuMetas/>
        </nav>
    </transition>
</template>

<script>
import MobileBarMenuUser from '@/components/MobileLayout/MenuBar/MobileBarMenuUser';
import MenuNav from '@/components/MenuNav/MenuNav';
import MenuNavItem from '@/components/MenuNav/MenuNavItem';
import MenuNavDropdownItem from '@/components/MenuNav/DropdownItem';
import MobileBarMenuMetas from '@/components/MobileLayout/MenuBar/MobileBarMenuMetas';

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
