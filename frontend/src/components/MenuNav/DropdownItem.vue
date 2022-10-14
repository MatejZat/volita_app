<template>
    <li class="dropdown-item">
        <AppButton @click="handleClick" no-style ripple-white>
            <span>{{ text }}</span>
        </AppButton>
    </li>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
    props: {
        text: String,
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

<style lang="scss">
.dropdown-item {
    span {
        padding: rem(10) 0;
        display: inline-block;
        font-size: rem(13);
        color: $primaryContrast;

        @include breakpointUp($xs) {
            font-size: rem(16);
        }

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