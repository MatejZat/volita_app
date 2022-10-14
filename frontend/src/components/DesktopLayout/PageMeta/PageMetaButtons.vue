<template>
    <div class="meta-buttons">
        <AppButton @click="goBack" no-style>
            <AppIcon icon-name="ArrowLeft"/>
        </AppButton>

        <AppButton @click="goForward" no-style>
            <AppIcon icon-name="ArrowRight"/>
        </AppButton>

        <AppButton @click="refresh" no-style>
            <AppIcon icon-name="Refresh"/>
        </AppButton>
    </div>
</template>

<script>
import AppButton from "@/components/AppButton";
import AppIcon from '@/components/AppIcon';

export default {
    components: {
        AppButton,
        AppIcon,
    },

    methods: {
        goForward() {
            return this.$router.go( 1 );
        },

        refresh() {
            window.location.reload();
        },

        goBack() {
            return this.$router.go( -1 );
        }
    },
}
</script>

<style lang="scss" scoped>
.meta-buttons {
    display: flex;

    button:nth-child(2) {
        margin-left: rem(10);
        margin-right: rem(20);
    }
}
</style>