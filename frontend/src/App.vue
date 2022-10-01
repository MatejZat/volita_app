<template>
    <MobileLayout v-if="isMobile">
        <RouterView v-slot="{ Component }">
            <transition name="page-transition" mode="out-in">
                <component :is="Component"/>
            </transition>
        </RouterView>
    </MobileLayout>

    <DesktopLayout v-else>
        <RouterView/>
    </DesktopLayout>
</template>

<script>
import MobileLayout from "@/layouts/MobileLayout";
import DesktopLayout from "@/layouts/DesktopLayout";

export default {
    components: {
        MobileLayout,
        DesktopLayout
    },

    data() {
        return {
            isMobile: true
        }
    },

    mounted() {
        this.switchLayout();
    },

    methods: {
        switchLayout() {
            window.innerWidth < 1024 ? this.isMobile = true : this.isMobile = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.page-transition-enter-from {
    opacity: 0;
    transform: translateX(80px);
}

.page-transition-enter-active,
.page-transition-leave-active {
    transition: all $pageTransitionSpeed;
}

.page-transition-leave-to {
    opacity: 0;
    transform: translateX(-80px);
}
</style>