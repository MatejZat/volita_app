<template>
    <div class="mobile-wrapper">
        <TheMobileBarMenu v-show="isMenuOpen"/>

        <div class="mobile-page-wrapper" :class="{ 'mobile-menu-open' : isMenuOpen }">
            <div v-show="isMenuOpen" @click="toggleMobileMenu" class="overlay"/>

            <TheMobileBarTop @iconMenuClick="toggleMobileMenu"/>

            <main>
                <div class="container">
                    <slot/>
                </div>
            </main>

            <TheMobileBarBottom/>
        </div>
    </div>
</template>

<script>
import TheMobileBarTop from '@/components/MobileLayout/TheMobileBarTop';
import TheMobileBarBottom from '@/components/MobileLayout/BottomBar/TheMobileBarBottom';
import TheMobileBarMenu from '@/components/MobileLayout/MenuBar/TheMobileBarMenu';

export default {
    components: {
        TheMobileBarTop,
        TheMobileBarBottom,
        TheMobileBarMenu
    },

    computed: {
        isMenuOpen() {
            return this.$store.getters.isMenuOpen;
        }
    },

    methods: {
        toggleMobileMenu() {
            this.$store.commit( 'toggleMobileMenu' );
        }
    },
}
</script>

<style lang="scss" scoped>
.mobile-wrapper {
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    background: $primary;
}

.mobile-page-wrapper {
    width: 100%;
    overflow: hidden;
    transform-origin: right center;
    z-index: 1;
    background: $whiteDarker;
    will-change: transform;
    transition: all $mobileBarSpeed;

    main {
        height: 100vh;
        overflow: auto;
    }

    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2000;
    }
}

.mobile-menu-open {
    position: absolute;
    border-radius: 12px;
    transform: scale(0.6) translateX(50%);

    @include breakpointUp($md) {
        transform: scale(0.7) translateX(40%);
    }
}
</style>
