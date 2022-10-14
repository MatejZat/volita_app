<template>
    <footer>
        <MenuNav horizontal>
            <MenuNavItem text="Hlásenia" icon-name="Bell" text-small/>
            <MenuNavItem text="Nastavenia" icon-name="Settings" text-small/>
            <MenuNavItem text="Odhlásiť sa" icon-name="Logout" text-small/>
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
}
</script>

