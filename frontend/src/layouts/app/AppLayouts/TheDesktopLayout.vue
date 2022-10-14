<template>
    <DesktopBarTop/>
    <DesktopBarMenu @menuExpand="handleExpand"/>

    <main ref="websitePage">
        <DesktopBarMetas />

        <div class="container">
            <slot/>
        </div>
    </main>
</template>

<script>
import DesktopBarTop from '@/components/DesktopBar/DesktopBarTop/DesktopBarTop';
import DesktopBarMenu from '@/components/DesktopBar/DesktopBarMenu';
import DesktopBarMetas from '@/components/DesktopBar/DesktopBarMetas/DesktopBarMetas';

export default {
    components: {
        DesktopBarTop,
        DesktopBarMenu,
        DesktopBarMetas
    },

    methods: {
        handleExpand( pixels ) {
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