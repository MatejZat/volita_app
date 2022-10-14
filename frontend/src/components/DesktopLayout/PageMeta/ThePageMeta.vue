<template>
    <header class="desktop-bar-meta">
        <div class="desktop-bar-meta-content">
            <PageMetaRoute :page-title="currentPageName" :breadcrumbs="currentPageMatches" />
            <PageMetaButtons/>
        </div>
    </header>
</template>

<script>
import PageMetaRoute from '@/components/DesktopLayout/PageMeta/PageMetaRoute';
import PageMetaButtons from '@/components/DesktopLayout/PageMeta/PageMetaButtons';

export default {
    components: {
        PageMetaRoute,
        PageMetaButtons,
    },

    computed: {
        currentPageName() {
            return this.$route.meta.title;
        },

        currentPageMatches() {
            return this.$route.matched;
        }
    },
}
</script>

<style lang="scss" scoped>
.desktop-bar-meta {
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
    }
}
</style>