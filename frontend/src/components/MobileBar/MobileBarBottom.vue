<template>
    <footer class="bottom-bar">
        <div class="bottom-bar-content">
            <MobileBarBottomItem icon="home" title="Domov" href="Dashboard"/>
            <MobileBarBottomItem icon="calendar" title="Kalendár" href="Calendar"/>
            <MobileBarBottomItem isExpanded icon="plus" title="Domov" href="Calendar"/>
            <MobileBarBottomItem icon="home" title="Domov" href="Login"/>
            <MobileBarBottomItem icon="home" title="Domov" href="Dashboard"/>
        </div>

        <MobileBarBottomItemWave/>
    </footer>
</template>

<script>
import MobileBarBottomItem from '@/components/MobileBar/MobileBarBottomItem';
import MobileBarBottomItemWave from '@/components/MobileBar/MobileBarBottomItemWave';

export default {
    components: {
        MobileBarBottomItem,
        MobileBarBottomItemWave
    },
}
</script>

<style lang="scss" scoped>
.bottom-bar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    backdrop-filter: blur(8px);
    z-index: 1000;
    background: rgba($white, 0.6);

    .bottom-bar-content {
        padding: rem(10) rem(20);
        margin-top: rem(-20);
        display: flex;
        justify-content: center;
        align-items: flex-end;

        > *:not(:last-child) {
            margin-right: rem(40);

            @include breakpointUp($md) {
                margin-right: rem(50);
            }
        }
    }
}

</style>