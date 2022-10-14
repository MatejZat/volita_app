<template>
    <header class="top-bar">
        <div class="top-bar-content">
            <TopBarLogo/>
            <TopBarSearch/>
            <TopBarUser/>
        </div>
    </header>
</template>

<script>
import TopBarLogo from '@/components/DesktopLayout/TopBar/TopBarLogo';
import TopBarSearch from '@/components/DesktopLayout/TopBar/TopBarSearch';
import TopBarUser from '@/components/DesktopLayout/TopBar/TopBarUser';

export default {
    components: {
        TopBarLogo,
        TopBarUser,
        TopBarSearch
    },
}
</script>

<style lang="scss" scoped>
.top-bar {
    z-index: 1000;
    transition: background-color $defaultSpeed;

    &-content {
        padding: rem(20) rem(20) 0 rem(20);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo-container,
        .user-container {
            flex-basis: 0;
            flex-grow: 1;
        }
    }
}
</style>