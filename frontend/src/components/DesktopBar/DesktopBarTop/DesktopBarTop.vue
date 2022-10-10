<template>
    <header class="top-bar">
        <div class="top-bar-content">
            <DesktopBarTopLogo/>
            <DesktopBarTopSearch/>
            <DesktopBarTopUser/>
        </div>
    </header>
</template>

<script>
import DesktopBarTopLogo from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopLogo';
import DesktopBarTopSearch from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopSearch';
import DesktopBarTopUser from '@/components/DesktopBar/DesktopBarTop/DesktopBarTopUser';

export default {
    components: {
        DesktopBarTopLogo,
        DesktopBarTopUser,
        DesktopBarTopSearch
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