<template>
    <footer>
        <MenuNav horizontal>
            <MenuNavItem title="Hlásenia" icon-name="Bell" small/>
            <MenuNavItem title="Nastavenia" icon-name="Settings" small/>
            <MenuNavItem title="Odhlásiť sa" icon-name="Logout" small/>
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

