<template>
    <header class="top-bar">
        <div class="top-bar-content">
            <AppButton @click="routeBack" no-style>
                <AppIcon icon-name="ChevLeft"/>
            </AppButton>

            <h3>{{ currentPageName }}</h3>

            <AppButton @click="openMobileMenu" no-style>
                <AppIcon icon-name="Menu"/>
            </AppButton>
        </div>
    </header>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppIcon from '@/components/AppIcon';

export default {
    components: {
        AppButton,
        AppIcon
    },

    computed: {
        currentPageName() {
            return this.$route.meta.title;
        }
    },

    methods: {
        openMobileMenu() {
            this.$emit( 'iconMenuClick' );
        },

        routeBack() {
            return this.$router.go( -1 );
        }
    },
}
</script>

<style lang="scss" scoped>
.top-bar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    backdrop-filter: blur(8px);
    background: rgba($white, 0.8);

    .top-bar-content {
        padding: rem(20);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ripple-button {
            width: auto;
        }
    }
}
</style>