<template>
    <TheTopBar/>
    <TheMenuBar @handleMenuExpansion="handleMenuExpansion"/>

    <main ref="websitePage">
        <ThePageMeta />

        <div class="container">
            <slot/>
        </div>
    </main>
</template>

<script>
import TheTopBar from '@/components/DesktopLayout/TopBar/TheTopBar';
import TheMenuBar from '@/components/DesktopLayout/TheMenuBar';
import ThePageMeta from '@/components/DesktopLayout/PageMeta/ThePageMeta';

export default {
    components: {
        TheTopBar,
        TheMenuBar,
        ThePageMeta
    },

    methods: {
        handleMenuExpansion( pixels ) {
            const websitePage = this.$refs.websitePage;
            websitePage.style.paddingLeft = pixels + 'px';
        }
    },
}
</script>

<style lang="scss" scoped>
main {
    padding-left: rem(64);
    width: 100%;
}
</style>