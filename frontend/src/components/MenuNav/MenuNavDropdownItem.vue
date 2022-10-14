<template>
    <li class="menu-nav-dropdown-item">
        <AppButton @click="handleClick" no-style ripple-white>
            <span class="font-nunito">{{ title }}</span>
        </AppButton>
    </li>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
    props: {
        title: String,
        routeName: String,
    },

    components: {
        AppButton
    },

    methods: {
        handleClick() {
            this.$store.commit( 'toggleMobileMenu' );
            this.$router.push( { name: this.routeName } );
        }
    },
}
</script>

<style lang="scss" scoped>
.menu-nav-dropdown-item {
    span {
        padding: rem(8) 0;
        display: inline-block;
        font-size: rem(12);
        color: $primaryContrast;

        @include breakpointUp($md) {
            font-size: rem(18);
        }

        @include breakpointUp($lg) {
            font-size: rem(12);
        }
    }

    .ripple-button {
        text-align: left;
    }
}
</style>