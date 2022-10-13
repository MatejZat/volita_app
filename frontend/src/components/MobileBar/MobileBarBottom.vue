<template>
    <footer class="bottom-bar">
        <div class="bottom-bar-content">
            <MobileBarBottomItem title="Nástenka" icon-name="Clipboard" route-name="Dashboard"/>
            <MobileBarBottomItem title="Kalendár" icon-name="Calendar" route-name="Calendar"/>
            <MobileBarBottomItem title="Obchodné prípady" icon-name="Plus" route-name="BusinessCases" is-main/>
            <MobileBarBottomItem title="Domov" icon-name="Home" route-name="Login"/>
            <MobileBarBottomItem title="Domov" icon-name="Home" route-name="Calendar"/>
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
        MobileBarBottomItemWave,
    },
}
</script>

<style lang="scss" scoped>
.bottom-bar {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1000;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    background: $white;

    .bottom-bar-content {
        padding: rem(10) rem(20);
        margin: rem(-32) auto 0 auto;
        max-width: rem(660);
        display: flex;
        justify-content: center;
        align-items: flex-end;

        > * {
            width: rem(60);

            &:not(:last-child) {
                margin-right: rem(20);

                @include breakpointUp($md) {
                    margin-right: rem(30);
                }
            }
        }
    }
}
</style>