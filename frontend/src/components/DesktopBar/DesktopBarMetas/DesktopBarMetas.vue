<template>
    <header class="desktop-bar-metas">
        <div class="desktop-bar-metas-content">
            <div class="metas-page-info">
                <h3>Page name</h3>
                <AppBreadcrumbs/>
            </div>

            <DesktopBarMetasArrows/>
        </div>
    </header>
</template>

<script>
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
import DesktopBarMetasArrows from '@/components/DesktopBar/DesktopBarMetas/DesktopBarMetasArrows';

export default {
    components: {
        AppBreadcrumbs,
        DesktopBarMetasArrows,
    },
}
</script>

<style lang="scss" scoped>
.desktop-bar-metas {
    position: sticky;
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(8px);
    background: rgba($whiteDarker, 0.8);

    &-content {
        padding: rem(20);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .metas-page-info h3 {
            margin-bottom: rem(4);
        }
    }
}
</style>