<template>
    <div class="app-modal">
        <div class="app-modal-content">
            <div class="icon-close-container">
                <AppButton ripple>
                    <AppIcon icon-name="X"/>
                </AppButton>
            </div>

            <slot />
        </div>
    </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppIcon from '@/components/AppIcon';

export default {
    components: {
        AppButton,
        AppIcon
    },
}
</script>

<style lang="scss" scoped>
.app-modal {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
    background: rgba($dark, 0.9);

    &-content {
        padding: rem(30);
        width: rem(600);
        position: relative;
        border-radius: 20px;
        background: $white;

        .icon-close-container {

        }
    }
}
</style>