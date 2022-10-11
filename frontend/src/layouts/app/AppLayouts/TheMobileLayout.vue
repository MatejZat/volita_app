<template>
    <div class="mobile-wrapper">
        <MobileBarMenu v-show="isMenuOpen"/>

        <div class="mobile-page-wrapper" :class="{ 'mobile-menu-open' : isMenuOpen }">
            <!-- Closing overlay when menu is open -->
            <div v-show="isMenuOpen" @click="toggleMobileMenu" class="overlay"/>

            <MobileBarTop @iconHandleClick="toggleMobileMenu" />

            <main>
                <div class="container">
                    <slot/>
                </div>
            </main>

            <MobileBarBottom/>
        </div>
    </div>
</template>

<script>
import MobileBarTop from '@/components/MobileBar/MobileBarTop';
import MobileBarBottom from '@/components/MobileBar/MobileBarBottom';
import MobileBarMenu from '@/components/MobileBar/MobileBarMenu';

export default {
    components: {
        MobileBarTop,
        MobileBarBottom,
        MobileBarMenu
    },

    computed: {
        isMenuOpen() {
            return this.$store.getters.isMenuOpen;
        }
    },

    methods: {
        toggleMobileMenu() {
            this.$store.commit( 'toggleMenuOpen' );
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
