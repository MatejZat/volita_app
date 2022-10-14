<template>
    <aside ref="websiteMenu" class="website-menu" :class="{ 'website-menu-expanded' : menuExpansionClass }">
        <a @click.prevent="toggleExpand" href="#" class="website-menu-expand-icon"
           :class="{ 'website-menu-expand-icon-open' : menuExpansionClass }">
            <AppIcon icon-name="ChevRight"/>
        </a>

        <div class="website-menu-content">
            <MenuNav>
                <MenuNavItem text="Nástenka" icon-name="Clipboard" route-name="Dashboard"
                             :menu-expansion="menuExpansion"/>
                <MenuNavItem text="Kalendár" icon-name="Calendar" route-name="Calendar"
                             :menu-expansion="menuExpansion"/>

                <MenuNavItem text="Adresár" icon-name="Folder" :menu-expansion="menuExpansion" has-dropdown>
                    <DropdownItem text="Klienti" route-name="Dashboard"/>
                    <DropdownItem text="Kontaktné osoby" route-name="Calendar"/>
                    <DropdownItem text="Lead" route-name="Dashboard"/>
                </MenuNavItem>

                <MenuNavItem text="Obchod" icon-name="Dollar" :menu-expansion="menuExpansion" has-dropdown>
                    <DropdownItem text="Obchodná nástenka" route-name="Calendar"/>
                    <DropdownItem text="Obchodné prípady" route-name="BusinessCases"/>
                    <DropdownItem text="Ponuky" route-name="Calendar"/>
                    <DropdownItem text="Objednávky" route-name="Dashboard"/>
                    <DropdownItem text="Projekty" route-name="Calendar"/>
                    <DropdownItem text="Produkty" route-name="Dashboard"/>
                    <DropdownItem text="Cenníky" route-name="Calendar"/>
                </MenuNavItem>
            </MenuNav>
        </div>
    </aside>
</template>

<script>
import AppIcon from '@/components/AppIcon';
import MenuNav from "@/components/MenuNav/MenuNav";
import MenuNavItem from "@/components/MenuNav/MenuNavItem";
import DropdownItem from "@/components/MenuNav/DropdownItem";

export default {
    components: {
        AppIcon,
        MenuNav,
        MenuNavItem,
        DropdownItem
    },

    data() {
        return {
            menuExpansion: 'hidden'
        }
    },

    mounted() {
        this.setUserExpandOption();
    },

    computed: {
        menuExpansionClass() {
            return this.menuExpansion === 'expanded' ? true : false;
        },
    },

    methods: {
        setUserExpandOption() {
            const userExpandOption = localStorage.getItem( 'menuExpansion' );

            if ( !userExpandOption ) {
                localStorage.setItem( 'menuExpansion', 'hidden' );
            }

            this.menuExpansion = userExpandOption;
        },

        toggleExpand() {
            const chooseExpansion = this.menuExpansion === 'expanded' ? 'hidden' : 'expanded';

            this.menuExpansion = chooseExpansion;
            localStorage.setItem( 'menuExpansion', chooseExpansion );
        },
    },

    watch: {
        menuExpansion() {
            if ( this.menuExpansion === 'expanded' ) {
                this.$emit( 'handleMenuExpansion', 200 );
            } else {
                this.$emit( 'handleMenuExpansion', 64 );
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.website-menu {
    width: 64px;
    height: calc(100vh - 80px);
    position: fixed;
    bottom: 0;
    z-index: 2000;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 8px;
    background: $primary;
    will-change: width;
    transition: width $defaultSpeed;

    &-expand-icon {
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

    &-content {
        padding-top: rem(40);
        padding-bottom: rem(30);
        color: $white;
    }

    &-expanded {
        width: 200px;
    }
}

</style>